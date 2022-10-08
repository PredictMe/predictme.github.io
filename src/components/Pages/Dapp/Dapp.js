import React, { Component, PureComponent } from "react";
import "./Dapp.css";
import Chart from "./components/Chart/Chart";
import NavBarDapp from "./components/NavBarDapp/NavBarDapp";
import { IexecSDK } from "../../../iexec_sdk/IexecSDK";
import TokenSelector from "./components/TokenSelector/TokenSelector";
import { TokenItems } from "./TokenItems";
import { useState } from "react";
import { motion } from "framer-motion";
import ConnectToDapp from "./components/ConnectToDapp/ConnectToDapp";
import { Grid } from "react-loader-spinner";
import Chart_prediction from "./components/Chart/Chart_prediction";
import uniqid from "uniqid";
import { Computation } from "./Computation";
import Stats from './components/Stats/Stats'
import { SERVER_URL } from "../../../settings";
const forge = require("node-forge");
let QuickEncrypt = require("quick-encrypt");



export default class Dapp extends Component {
  iexecSDK;
  privateKey;
  publicKey;
  

  constructor(props) {
    super(props);
    this.iexecSDK = new IexecSDK();
    let tokenItems = TokenItems;

    

    this.state = {
      navbarkey: "navbarkey",
      connectSetup: false,
      connectSetupKey: 0,
      userAddress: null,
      isConnected: false,
      isWalletConnected: false,
      isStorageInitialized: false,
      walletBalance: null,
      selectedTokenId: 0,
      tokenItems: tokenItems,
      selectedToken: tokenItems[0],
      chartKey: "chartKey",
      chartPredictionKey: "chartPredictionKey",
      loading: false,
      prediction: null,
    };
  }

  generateKeys(){
    let keys = QuickEncrypt.generate(2048);
    this.publicKey = keys.public;
    this.privateKey = keys.private;
  }

  connectToDapp = async () => {
    console.log("connect to wallet");
    this.setState({ connectSetup: true });
    //await this.onConnected()
    await this.onConectToWallet();
    await this.onConnectToStorage();
  };

  async onConectToWallet() {
    await this.iexecSDK.init();
    this.setState({ isWalletConnected: true });
    this.setState({ connectSetupKey: uniqid() });
  }

  async onConnectToStorage() {
    await this.iexecSDK.initStorage();
    let isStorageInitialized = this.iexecSDK.checkStorage();
    if (isStorageInitialized != this.state.isStorageInitialized) {
      this.setState({ isStorageInitialized: isStorageInitialized });
    }

    this.setState({ connectSetup: false });
    this.setState({ connectSetupKey: uniqid() });
    await this.onConnected();
  }

  async onConnected() {
    let { native, userAddress } = await this.iexecSDK.getUserAccount();
    this.setState({ walletBalance: native });
    this.setState({ userAddress: userAddress });
    this.setState({ isConnected: true });
    console.log(userAddress);

    this.setState({ navbarkey: uniqid() });
  }

  onTokenSelect(id) {
    console.log("tokenId", id);

    this.setState({ selectedTokenId: id });
    this.setState({ selectedToken: this.state.tokenItems[id] });
    this.setState({ chartKey: uniqid() });
    this.setState({ chartPredictionKey: uniqid() });
  }

  onComputationProgress(step) {
    if (step == 1) {
      console.log("upload public key");
    }
    if (step == 2) {
      console.log("computing");
    }
    if (step == 3) {
      console.log("finsished computing");
    }
    if (step == 4) {
      console.log("downloading result");
    }
    if (step == 5) {
      console.log("done");
    }
  }

  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


  async sendToAITracker(dappAddress, oracleAdress, taskId) {
    let res = await fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        dappAddress: dappAddress,
        oracleAddress: oracleAdress,
        taskId: taskId,
        timestamp: Date.now(),
      }),
    });
  }

   buyComputation = async () => {
    if(!this.publicKey){
      this.generateKeys()
    }
    this.setState({ loading: true });
    let { dappAddress, oracleAddress, workerpool, trust, category, params, id } =
      this.state.selectedToken;
    let file_url = await Computation.sendPublicKey(this.publicKey.toString());
    let {prediction_encrypted, taskId} = await this.requestAppOrder(dappAddress,workerpool,trust,category,file_url);
    let prediction_decrypted = await Computation.decryptPrediction(this.privateKey,prediction_encrypted);
    await this.updateUI(id,prediction_decrypted)
    await this.sendToAITracker(dappAddress, oracleAddress, taskId);
  }



   requestAppOrder = async (dappAddress,workerpool,trust,category,file_url) => {
    //requestAppORder
    let params = {
      iexec_result_storage_provider: "ipfs",
      iexec_result_storage_proxy: "https://v7.result.bellecour.iex.ec",
      iexec_input_files: file_url,
    };
    let dealId = await this.iexecSDK.buyComputation(
      dappAddress,
      category,
      params,
      workerpool,
      trust,
      this.onComputationProgress.bind(this)
    );
    let taskId = await this.iexecSDK.showDeal(dealId);

    let task = false;
    while (!task) {
      let task_status = await this.iexecSDK.showTask(taskId);
      await this.delay(3000);
      if (task_status) {
        console.log(task_status["statusName"]);
        if (task_status["statusName"] === "COMPLETED") {
          task = true;
        }
      }
    }
    console.log("taskId: " + taskId);
    let res = await this.iexecSDK.dowloadResults(taskId);
    let prediction_encrypted = res.prediction.prediction_for_user;
    return {prediction_encrypted : prediction_encrypted, taskId : taskId};
  }

   updateUI = async (tokenId,prediction) => {
    console.log("decrypted_prediction: " + prediction);
    this.setState({ loading: false });
    this.state.tokenItems[tokenId].prediction = prediction
    this.setState({ chartKey: uniqid() });
    this.setState({ chartPredictionKey: uniqid() });

    
  }
  render() {
    return (
      <div className="dapp-container-1">
        <div
          className={
            this.state.connectSetup ? "connectSetup active" : "connectSetup"
          }
        >
          <ConnectToDapp
            key={this.state.connectSetupKey}
            isStorageConnected={this.state.isStorageInitialized}
            isWalletConnected={this.state.isWalletConnected}
            onConnectToWallet={this.onConectToWallet.bind(this)}
            onConnectToStorage={this.onConnectToStorage.bind(this)}
          />
        </div>
        <NavBarDapp
          key={this.state.navbarkey}
          onConnectToDapp={this.connectToDapp.bind(this)}
          isConnected={this.state.isConnected}
          userAddress={this.state.userAddress}
          walletBalance={this.state.walletBalance}
        ></NavBarDapp>
        <div className="token-selector-container">
          {" "}
          <TokenSelector
            selectedToken={this.state.selectedTokenId}
            onTokenSelect={this.onTokenSelect.bind(this)}
          />{" "}
        </div>
        <div className="dapp-layout">
          <div className="dapp-left">
            <div className="dapp-box">
              <div className="chart-box">
                {" "}
                <Chart_prediction
                  key={this.state.chartPredictionKey}
                  prediction={
                    this.state.tokenItems[this.state.selectedTokenId].prediction
                  }
                />
                <Chart
                  key={this.state.chartKey}
                  prediction={
                    this.state.tokenItems[this.state.selectedTokenId].prediction
                  }
                  selectedToken={this.state.selectedToken}
                />{" "}
              </div>
              {this.state.loading ? (
                <div className="loading-animation">
                  <Grid color="#0D6EFD" height={40} width={40} />
                </div>
              ) : (
                <div
                  className={
                    this.state.isConnected
                      ? "button-dapp active"
                      : "button-dapp"
                  }
                  onClick={
                    this.state.isConnected
                      ? this.buyComputation
                      : null
                  }
                >
                  Buy computation
                </div>
              )}
            </div>
          </div>
          <div className="dapp-right">
            <Stats dappAddress={this.state.selectedToken.dappAddress}></Stats>
          </div>
        </div>
      </div>
    );
  }
}

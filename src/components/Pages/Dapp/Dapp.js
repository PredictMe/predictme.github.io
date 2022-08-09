import React, {Component, PureComponent} from 'react'
import "./Dapp.css"
import Chart from "./components/Chart/Chart"
import NavBarDapp from './components/NavBarDapp/NavBarDapp'
import { IexecSDK } from '../../../iexec_sdk/IexecSDK';
import TokenSelector from './components/TokenSelector/TokenSelector'
import { TokenItems } from './TokenItems';
import { useState } from 'react';
import { motion } from 'framer-motion'
import ConnectToDapp from './components/ConnectToDapp/ConnectToDapp'

export default class Dapp extends Component{
  iexecSDK
  
  
  constructor(props){
    super(props)
    this.iexecSDK = new IexecSDK()
    this.state={
      navbarkey : 0,
      connectSetup : false,
      connectSetupKey : 0,
      userAddress : null,
      isConnected : false,
      isWalletConnected : false,
      isStorageInitialized : false,
      walletBalance : null,
      selectedTokenId : 0,
      selectedToken : TokenItems[0],
      chartKey : 0,
      
    }
  }

   connectToDapp = async () =>{
    console.log("connect to wallet")
    this.setState({connectSetup : true})
    //await this.onConnected()
    await this.onConectToWallet()
  }

  async onConectToWallet(){
    await this.iexecSDK.init()
    this.setState({isWalletConnected : true})
    let connectSetupKey = this.state.connectSetupKey + 1
    this.setState({connectSetupKey : connectSetupKey})
  }

  async onConnectToStorage(){
    await this.iexecSDK.initStorage()
    let isStorageInitialized = this.iexecSDK.checkStorage()
    if(isStorageInitialized != this.state.isStorageInitialized){this.setState({isStorageInitialized: isStorageInitialized})}
   
    this.setState({connectSetup : false})
    let connectSetupKey = this.state.connectSetupKey + 1
    this.setState({connectSetupKey : connectSetupKey})
    await this.onConnected()
  }

   async onConnected () {
    
    let {native,userAddress } = await this.iexecSDK.getUserAccount()
    this.setState({walletBalance : native})
    this.setState({userAddress : userAddress})
    this.setState({isConnected : true})
    console.log(userAddress)
    
    
    let navbarkey = this.state.navbarkey + 1
    this.setState({navbarkey : navbarkey})
  }

  onTokenSelect(id){
    console.log("tokenId",id)
    
        this.setState({selectedTokenId : id})
        this.setState({selectedToken : TokenItems[id]})
        let chartKey = this.state.chartKey + 1
        this.setState({chartKey : chartKey})
      
    
  }

  onComputationProgress(step){
      if(step == 1){console.log("signed order")}
      if(step == 2){console.log("computing")}
      if(step == 3){console.log("finsished computing")}
      if(step == 4){console.log("downloading result")}
      if(step == 5){console.log("done")}
  }
  
  delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  async onBuyComputation(){
    console.log("buy computation")
    
    let {dappAddress, workerpool, trust, category, params } = this.state.selectedToken
    let dealId = await this.iexecSDK.buyComputation(dappAddress,category,params,workerpool,trust,this.onComputationProgress.bind(this))
    let taskId = await this.iexecSDK.showDeal(dealId)

      let task = false
      while(!task){
        let task_status = await this.iexecSDK.showTask(taskId)
        await this.delay(3000)
        if(task_status){
          if(task_status["statusName"] === "COMPLETED"){
            task = true
          } 
        }
      }
      
    let res = await this.iexecSDK.dowloadResults(taskId)
    console.log(res)
  }
    render() {

        return (
          <div className='layout-01'>
            <div className={this.state.connectSetup ? 'connectSetup active' : 'connectSetup'}><ConnectToDapp key={this.state.connectSetupKey} isStorageConnected={this.state.isStorageInitialized}isWalletConnected={this.state.isWalletConnected} onConnectToWallet={this.onConectToWallet.bind(this)}onConnectToStorage={this.onConnectToStorage.bind(this)}/></div>
            <NavBarDapp key={this.state.navbarkey} onConnectToDapp={this.connectToDapp.bind(this)}  isConnected={this.state.isConnected} userAddress={this.state.userAddress} walletBalance={this.state.walletBalance}></NavBarDapp>
            <div className='token-selector-container'> <TokenSelector selectedToken={this.state.selectedTokenId} onTokenSelect={this.onTokenSelect.bind(this)}/> </div>
            <div className='dapp-container'>
          <div className='chart-container'> <Chart key={this.state.chartKey} selectedToken={this.state.selectedToken}/> </div>
           <div className='button-dapp' onClick={this.onBuyComputation.bind(this)}>Buy computation</div>
        </div>
        </div>
        )
      }

      
}

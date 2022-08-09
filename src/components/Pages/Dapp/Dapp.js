import React, {Component, PureComponent} from 'react'
import "./Dapp.css"
import Chart from "./Chart"
import NavBarDapp from './NavBarDapp'
import { IexecSDK } from '../../../iexec_sdk/IexecSDK';
import TokenSelector from './TokenSelector'
import { TokenItems } from './TokenItems';
import { useState } from 'react';

export default class Dapp extends Component{
  iexecSDK
  
  
  constructor(props){
    super(props)
    this.iexecSDK = new IexecSDK()
    this.state={
      navbarkey : 0,
      isConnected : false,
      walletBalance : null,
      selectedTokenId : 0,
      isStorageInitialized : false,
      selectedToken : TokenItems[0],
      chartKey : 0
    }
  }

   connectToWallet = async () =>{
    console.log("connect to wallet")
    await this.iexecSDK.init()
    await this.onConnected()
  }

   onConnected =  async () => {
    
    let walletBalance = await this.iexecSDK.getUserAccountBalance()
    this.setState({walletBalance : walletBalance})
    let navbarkey = this.state.navbarkey + 1
    this.setState({navbarkey : navbarkey})
    this.setState({isConnected : true})
    await this.iexecSDK.initStorage()
    let isStorageInitialized = this.iexecSDK.checkStorage()
    if(isStorageInitialized != this.state.isStorageInitialized){this.setState({isStorageInitialized: isStorageInitialized})}
    //await this.iexecSDK.checkStorage()
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
            <NavBarDapp key={this.state.navbarkey} onConnectToWallet={this.connectToWallet.bind(this)}  isConnected={this.state.isConnected} walletBalance={this.state.walletBalance}></NavBarDapp>
            <div className='token-selector-container'> <TokenSelector onTokenSelect={this.onTokenSelect.bind(this)}/> </div>
            <div className='dapp-container'>
          <div className='chart-container'>
            <Chart key={this.state.chartKey} selectedToken={this.state.selectedToken}/>
            </div>
           <div className='button-dapp' onClick={this.onBuyComputation.bind(this)}> </div>
           <div><h3>{this.state.isStorageInitialized ? "storage is initialized" : "storage is not initialized"}</h3> </div> 
        </div>
        </div>
        )
      }

      
}

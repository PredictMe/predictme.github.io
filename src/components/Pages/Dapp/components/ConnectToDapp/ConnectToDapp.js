import React, { Component } from 'react'
import './ConnectToDapp.css'

export default class ConnectToDapp extends Component {
    constructor(props){
        super(props)
        this.state = {
          isWalletConnected : props.isWalletConnected,
          isStorageConnected : props.isStorageConnected,
        }
    }

  onConnectToWallet(){
    this.props.onConnectToWallet()
  }

  onConnectToStorage(){
    this.props.onConnectToStorage()
  }

  render() {
    return (
      <div className='container'>
        <h2 className='setupText'>{this.state.isWalletConnected ? 'Setup 2/2' : 'Setup 1/2'}</h2>
        <div onClick={this.onConnectToWallet.bind(this)} className={this.state.isWalletConnected ? 'connect-wallet' : 'connect-wallet active'}>Connect to wallet</div>
        <div onClick={this.onConnectToStorage.bind(this)} className={this.state.isWalletConnected ? 'connect-storage active' : 'connect-storage'}>Initiate storage</div>
        </div>
    )
  }
}

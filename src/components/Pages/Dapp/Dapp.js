import React, {Component, PureComponent} from 'react'
import "./Dapp.css"
import Chart from "./Chart"
import { TokenItems } from './TokenItems'
import NavBarDapp from './NavBarDapp'
import { IexecSDK } from '../../../iexec_sdk/IexecSDK';


export default class Dapp extends Component{
  iexecSDK
  isConnected = false
  constructor(props){
    super(props)
    this.iexecSDK = new IexecSDK()
  }

   connectToWallet = async () =>{
    console.log("connect to wallet")
    this.iexecSDK.init(this.onConnected)
  }

  onConnected = async () => {
    this.isConnected = true
    console.log(this.isConnected)
    await this.iexecSDK.initStorage()
    await this.iexecSDK.checkStorage()
  }

    render() {

        return (
          <div className='layout-01'>
            <NavBarDapp onConnectToWallet={this.connectToWallet}></NavBarDapp>
            <div className='token-menu'>
            <ul>
                    {
                        TokenItems.map((item,index)=>{
                            return <li key={index}> <span className='token-text-01'>{item.text1}</span><span className='token-text-02'>{item.text2}</span> </li>
                        })
                    }
                    
                </ul>
            </div>
            <div className='dapp-container'>
          <div className='chart-container'>
            <Chart/>
            </div>
           <div className='button-dapp'> </div> 
        </div>
        </div>
        )
      }

      
}

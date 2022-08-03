import React, {Component, PureComponent} from 'react'
import "./Dapp.css"
import { Button } from 'react-bootstrap'
import Chart from "./Chart"
import { TokenItems } from './TokenItems'
import NavBarDapp from './NavBarDapp'
export default class Dapp extends Component{

  connectToWallet(){
    console.log("clicked")
  }
    render() {
        return (
          <div className='layout-01'>
            <NavBarDapp onClick={this.connectToWallet}></NavBarDapp>
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


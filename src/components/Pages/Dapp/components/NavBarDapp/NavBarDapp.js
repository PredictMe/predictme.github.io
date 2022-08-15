import React, { Component,  useState } from 'react'
import './NavBarDapp.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class NavBarDapp extends Component {
    state = {
        walletBalance: this.props.walletBalance,
        isConnected: this.props.isConnected,
        scroll : false
      };
    constructor(props){
        super(props)

    }
  
onScroll = () => {
    if(window.scrollY >= 80){
        this.setState({scroll : true})
    }else{
        this.setState({scroll : false})
    }
    
    
}   
onClick = () => {
    this.props.onConnectToDapp()
}

wallet(){
    if(this.props.isConnected){
        let address = this.props.userAddress
        let address_first_part = address.substring(0,6)
        let address_second_part = address.substring(address.length-4, address.length)

       return     <div className="account-info"> <div className='account-address'>{address_first_part+"..."+address_second_part} </div> <img className="avatar-icon" src='avatar-icon.svg'></img></div>
    }else{
     return   <div className='navbardapp-btn' onClick={this.onClick} variant="secondary" > {this.props.isConnected ? "Connected" : "Connect Wallet"}</div>
    }
}

  render() {
    

    window.addEventListener('scroll',this.onScroll)
    return(
        <nav    className={this.state.scroll ? 'NavbarDappItems active' : 'NavbarDappItems'}>
           <Link to="/"><div className='navbardapp-logo-container'><img className='navbardapp-logo-img' src="predictme-logo.png" alt='logo'></img><div className='navbardapp-logo-text'>PredictMe </div> </div></Link>
            {this.wallet()}
        </nav>
    )
  }
}


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
     return   <Button onClick={this.onClick} variant="secondary" > {this.props.isConnected ? "Connected" : "Connect Wallet"}</Button>
    }
}

  render() {
    let navbalance = () =>{
        console.log(this.props.isConnected)
        if(this.props.walletBalance){
            
            return <h1></h1>
        }else {
            return <div></div>
        }
        
    }
    

    window.addEventListener('scroll',this.onScroll)
    return(
        <nav    className={this.state.scroll ? 'NavbarItems active' : 'NavbarItems'}>
           <Link to="/"><h1 className='navbar-logo'>PredictMe <i className='lni lni-react'></i></h1></Link>
            {navbalance()}
            
            
       {this.wallet()}
        </nav>
    )
  }
}


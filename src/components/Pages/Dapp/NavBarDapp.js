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
    this.props.onConnectToWallet()
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
            
           

        <Button onClick={this.onClick} variant="secondary" > {this.props.isConnected ? "Connected" : "Connect Wallet"}</Button>
        </nav>
    )
  }
}


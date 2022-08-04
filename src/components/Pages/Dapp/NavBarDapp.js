import React, { Component, useState } from 'react'
import './NavBarDapp.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class NavBarDapp extends Component {
    constructor(props){
        super(props)

    }
    state = {scroll : false}

 

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
    window.addEventListener('scroll',this.onScroll)
    return(
        <nav    className={this.state.scroll ? 'NavbarItems active' : 'NavbarItems'}>
           <Link to="/"><h1 className='navbar-logo'>PredictMe <i className='lni lni-react'></i></h1></Link> 

        <Button onClick={this.onClick}>Connect Wallet</Button>
        </nav>
    )
  }
}


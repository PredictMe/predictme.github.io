import React, { Component, useState } from 'react'
import './NavBarDapp.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IexecSDK } from '../../../iexec_sdk/IexecSDK';

export default class NavBarDapp extends Component {

    state = {scroll : false}



onScroll = () => {
    if(window.scrollY >= 80){
        this.setState({scroll : true})
    }else{
        this.setState({scroll : false})
    }
    
    
}

  render() {
    window.addEventListener('scroll',this.onScroll)
    return(
        <nav    className={this.state.scroll ? 'NavbarItems active' : 'NavbarItems'}>
           <Link to="/"><h1 className='navbar-logo'>PredictMe <i className='lni lni-react'></i></h1></Link> 

        <Button onClick={this.props.onClick}>Connect Wallet</Button>
        </nav>
    )
  }
}

import React, { Component, useState } from 'react'
import {MenuItems} from './MenuItems'
import { AppButton } from './AppButton'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component{

    state = {clicked : false,
            scroll : false}

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    onScroll = () => {
        if(window.scrollY >= 80){
            this.setState({scroll : true})
        }else{
            this.setState({scroll : false})
        }
        
        
    }

    

    render(){
        window.addEventListener('scroll',this.onScroll)
        return(
            <nav    className={this.state.scroll ? 'NavbarItems active' : 'NavbarItems'}>
                <h1 className='navbar-logo'>PredictMe <i className='lni lni-react'></i></h1>
                <div    className='menu-icon' onClick={this.handleClick}>
                    <i  className={this.state.clicked ? 'lni lni-cross-circle' :'lni lni-menu'  }></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((item,index)=>{
                            return <li key={index}> <Link to={item.url}> <a className={item.cName}> {item.title} </a> </Link></li>
                        })
                    }
                    
                </ul>
                <AppButton>Launch App</AppButton>
            </nav>
        )
    }
}

export default Navbar
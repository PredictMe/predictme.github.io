import React, { Component, useState } from 'react'
import {MenuItems} from './MenuItems'
import { AppButton } from './components/AppButton/AppButton'
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
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
            <nav className={this.state.scroll ? 'Navbar active' : 'Navbar'}>
                <div className='navbar-logo-container'><img className='navbar-logo-img' src="predictme-logo.png" alt='logo'/><div className='navbar-logo-text'>PredictMe </div> </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'lni lni-cross-circle' :'lni lni-menu'  }/>
                </div>
                
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {
                           MenuItems.map((item,index)=>{
                               return <li key={index}> <Link to={item.url} onClick={() => {this.setState({clicked : false})}}> <a  className={item.cName}> {item.title} </a> </Link></li>
                            })
                        }
                    </ul>
               
               <Link to='/Dapp'><AppButton className='navbar-appbutton'>Launch App</AppButton></Link> 
            </nav>
        )
    }
}

export default Navbar
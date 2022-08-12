import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-layer-1'>
        <div className='demo-text'>DEMO NOT TRADING ADVICE</div>
        <div className='opensource-text'>This project is for Iexec bounty program. The code is open-source.</div>
        </div>
        <div className='footer-layer-2'>
          <div className='github-item'><img className='github-logo' src='github-logo-01.svg' alt='github logo'/><div className='github-text'>Github</div></div>
          {/*<div className='iexec-item'><img className='iexec-logo' src='iexec-logo-02.svg' alt='iexec logo'/><div className='iexec-text'>Iexec</div></div>*/}
        </div>
      </div>
    )
  }
}

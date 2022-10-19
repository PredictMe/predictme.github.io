import React, { Component } from 'react'
import './Docs.css'
import { text01_line01, Text2, Text3 } from './Text';

export default class Docs extends Component {
  render() {
    return (
      <div className='docs-container'>
        <div className='docs-layout'>
          <div className='docs-title'>How to monetize AI using Iexec?</div>
          <div className='docs-box'>
              <div className='docs-number'>1</div>
              <div className='docs-text'><div>Train a machine learning model</div></div>
          </div>
          <div className='docs-box'>
             <div className='docs-number'>2</div>
             <div className='docs-text'><div>Create a docker image with the ml model (<a className='docs-link' href='https://github.com/PredictMe/predictme-ml' target="_blank"> link </a>)</div> </div>
          </div>
          <div className='docs-box'>
             <div className='docs-number'>3</div>
             <div className='docs-text'><div>Create an iexec dapp with the docker image (<a className='docs-link' href='https://docs.iex.ec/for-developers/your-first-app' target="_blank"> link </a>)</div> </div>
          </div>
          <div className='docs-box'>
             <div className='docs-number'>4</div>
             <div className='docs-text'><div>Publish app orders (<a className='docs-link' href='https://docs.iex.ec/for-developers/advanced/manage-your-apporders' target="_blank"> link </a>)</div> </div>
          </div>
        </div>
      </div>
    )
  }
}


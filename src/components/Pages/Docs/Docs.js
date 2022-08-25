import React, { Component } from 'react'
import './Docs.css'
import { text01_line01, Text2, Text3 } from './Text';

export default class Docs extends Component {
  render() {
    return (
      <div className='docs-container'>
        <div className='docs-layout-01'>
          <h1>Monetize AI using Iexec</h1>
          <div className='docs-box-01'>
              <div className='docs-01-number'>1</div>
              <div className='docs-01-text'><div>Train a machine learning model</div></div>
          </div>
          <div className='docs-box-01'>
             <div className='docs-01-number'>2</div>
             <div className='docs-01-text'><div>Create a docker image with the ml model (<a href='https://github.com/PredictMe/predictme-ml' target="_blank"> link </a>)</div> </div>
          </div>
          <div className='docs-box-01'>
             <div className='docs-01-number'>3</div>
             <div className='docs-01-text'><div>Create an iexec dapp with the docker image (<a href='https://docs.iex.ec/for-developers/your-first-app' target="_blank"> link </a>)</div> </div>
          </div>
          <div className='docs-box-01'>
             <div className='docs-01-number'>4</div>
             <div className='docs-01-text'><div>Publish app orders (<a href='https://docs.iex.ec/for-developers/advanced/manage-your-apporders' target="_blank"> link </a>)</div> </div>
          </div>
        </div>
        {/*
        <div className='docs-layout-02'>
          <div><img className='docs-02-github-logo' src='./github-white.png'></img><h3 className='docs-02-github-link-text'>PredictMe Docker Image</h3></div>
          <div><h3 className='docs-02-github-link-text'>PredictMe Webapp</h3></div>
          <div><h3 className='docs-02-github-link-text'>Iexec javascript sdk</h3></div>
          <h3>_</h3>
          <h3>How to create an Iexec dapp</h3>
          <h3>How to create an encrypted Iexec dapp</h3>
        </div>
        */}
      </div>
    )
  }
}


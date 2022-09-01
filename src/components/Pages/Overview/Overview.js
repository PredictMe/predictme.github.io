import React from 'react'
import './Overview.css'
import Chart from './../Dapp/components/Chart/Chart'
import {TokenItems} from './../Dapp/TokenItems'
import Chart_info from '../Dapp/components/Chart/Chart_info'

function Overview() {

  

  return (
    <div className='overview-container'>
       
      <div className='ov-grid-1'>
        <div className='ov-layer-11'> 
          <img className='ov-11-image' src='ellipse-11.svg' alt="background"/>
          <h1 className='ov-11-text-01'>Buy AI Predictions</h1>
          <h2 className='ov-11-text-02'>Powered by Iexec</h2>
        </div>
        <div className='ov-layer-12'><Chart_info symbol={TokenItems[0].symbol}/> <Chart className='layer-02-chart' isDemo={false} selectedToken={TokenItems[0]}/> </div>
        <div className='ov-layer-13'><Chart_info symbol={TokenItems[1].symbol}/> <Chart className='layer-02-chart' isDemo={false} selectedToken={TokenItems[1]}/> </div>
        <div className='ov-layer-14'><Chart_info symbol={TokenItems[2].symbol}/> <Chart className='layer-02-chart' isDemo={false} selectedToken={TokenItems[2]}/> </div>
      </div>

      <div  className='ov-grid-2'>
      {window.innerWidth<960 ? <h1 className='ov-2-all-decentralized' > <pre>From start to finish it’s </pre> all decentralized</h1> : <h1 className='ov-2-all-decentralized' > <pre>From start to finish it’s all</pre> decentralized</h1> }
      </div>

      <div className='ov-grid-3'>
        <img className='ov-31-image' src='ellipse-11.svg' alt="background"></img>
        {/*<img className='ov-32-description' src='/description-01.svg' alt='descrition-01'/>*/}
        <div className='ov-32-description-container'><div className='ov-32-description-title'>{Text.title01}</div><div className='ov-32-description-text'>{Text.descrition01}</div></div>
        <img className='ov-33-infographic' src="/infographic-01.svg" alt="infographic-01" />
      </div>

      <div  className='ov-grid-4'>
      {window.innerWidth<960 ? <h1 className='ov-4-monetize-ai' ><pre>Monetize AI models</pre>  whithout losing ownership</h1> : <h1 className='ov-4-monetize-ai' ><pre>Monetize AI models whithout losing </pre>ownership</h1> }
      </div>

      <div className='ov-grid-5'>
        <img className='ov-51-image' src='ellipse-11.svg' alt="background"/>
        <img className='ov-52-infographic' src="/infographic-04.svg" alt="infographic-02"/>
        {/*<img className='ov-52-description' src='/description-02.svg' alt='descrition-02'/*/}
        <div className='ov-53-description-container'><div className='ov-53-description-title'>{Text.title02}</div><div className='ov-53-description-text'>{Text.descrition02}</div></div>
      </div>
        
        </div>
  )
}

const Text = {
  title01 : "How it works",
  descrition01 : "When you buy a prediction, the dapp is executed by a network of workers. It fetches data from binance and runs a machine learning algorithm to predict the market trend.",
  title02 : "The AI model is private at all times.",
  descrition02 : "The model is stored encrypted. It is only decrypted inside the worker in a sgx enclave. The sgx enclave makes it imposible for the hardware owner to inspect the code.",

}

export default Overview
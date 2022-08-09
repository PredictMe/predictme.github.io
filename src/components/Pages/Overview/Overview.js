import React from 'react'
import './Overview.css'
import Chart from './../Dapp/components/Chart/Chart'
import {TokenItems} from './../Dapp/TokenItems'

function Overview() {
  return (
    <div className='overview-container'>
       
      <div className='grid-01'>
       
        <div className='layer-01'> 
        <img className='layer-01-image' src='ellipse-11.svg' alt="background"></img>
          <h1 className='layer-01-text-01'>Buy AI Predictions</h1>
          <h2 className='layer-01-text-02'>Powered by Iexec</h2>
          </div>
        <div className='layer-02'> <Chart className='layer-02-chart' selectedToken={TokenItems[0]}/> </div>
        <div className='layer-03'> <Chart className='layer-02-chart' selectedToken={TokenItems[0]}/> </div>
        <div className='layer-04'> <Chart className='layer-02-chart' selectedToken={TokenItems[0]}/> </div>
      </div>

      <div  className='grid-51'>
        <h1 className='all-decentralized' > <pre>From start to finish it’s all</pre> decentralized</h1>
      </div>

      <div className='grid-21'>
      <img className='layer-02-image' src='ellipse-11.svg' alt="background"></img>
        <img className='description-01' src='/description-01.svg' alt='descrition-01'/>
        <img className='infographic-01' src="/infographic-01.svg" alt="infographic-01" />
      </div>

      <div  className='grid-31'>
      
        <h1 className='monetize-ai' ><pre>Monetize AI models whithout losing </pre>ownership</h1>
      </div>

      <div className='grid-41'>
      <img className='layer-04-image' src='ellipse-11.svg' alt="background"></img>
        <img className='infographic-02' src="/infographic-02.svg" alt="infographic-02" />
        <img className='description-02' src='/description-02.svg' alt='descrition-02'/>
      </div>
        
        </div>
  )
}

export default Overview
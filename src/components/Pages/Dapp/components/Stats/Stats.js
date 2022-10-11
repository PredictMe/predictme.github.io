import React, { useState, useMemo } from 'react'
import './Stats.css'
import {SERVER_URL} from '../../../../../settings'
import useFetch from './useFetch'

function Stats(props) {
    //let [stats,setStats] = useState()
    let dappAddress = props.dappAddress
    let memoDappAddress = useMemo(() => ({dappAddress}),[dappAddress])
    let {data} = useFetch(memoDappAddress)

  
    console.log(data)
    return (
    <div className="aitracker-box">
              <div className="aitracker-title-layout">
                <img
                  className="aitracker-logo"
                  src="./logo-aitracker.png"
                  alt="ai tracker logo"
                />{" "}
                <h3 className="aitracker-title">AI Tracker Stats</h3>
              </div>
              <div className="aitracker-list">Total runs: {data.total_predictions}</div>
              <div className="aitracker-list">Correct/Incorrect: {data.correct_predictions} / {data.incorrect_prediction}</div>
              <div className="aitracker-list">Correct percentige: {data.percentige}%</div>
              
              <div className='aitracker-learnmore'><a href='https://aidecentralizedtracker.github.io/' target="_blank">Learn more</a></div>
    </div>
  )
}

export default Stats
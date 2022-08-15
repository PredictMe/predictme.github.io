import React, { Component } from 'react'
import './Chart_prediction.css'
export default class Chart_prediction extends Component {

    constructor(props){
        super(props)
        this.state = {
          prediction : null
        }
        try {
          if(props.prediction){
            this.state.prediction = props.prediction
          }
        } catch (error) {
          this.state.prediction = null
        }
    }
    
  render() {
    
        if(this.state.prediction == "UP"){
          return <div className='chart-prediction-box'><h1 className='chart-prediction-text'>BULLISH</h1></div>
        }else if(this.state.prediction == "DOWN"){
          return <div className='chart-prediction-box'><h1 className='chart-prediction-text'>BEARISH</h1></div>
        }else{
          return null
        }
      
      
    
  }
}

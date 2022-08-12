import React, { Component } from 'react'
import './Chart_info.css'
export default class Chart_info extends Component {
    constructor(props){
        super(props)
        this.state = {
            symbol : props.symbol,
            prediction : props.prediction,
        }
    }
  render() {
    return (
      <div className="chart-info"><div className="chart-info-symbol">{this.state.symbol}</div>{/*<div className="chart-info-prediction">{this.state.prediction ? this.state.prediction : null}</div>*/}</div>
    )
  }
}

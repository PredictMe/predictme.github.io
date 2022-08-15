import React, { Component } from 'react'
import './Chart_info.css'
export default class Chart_info extends Component {
    constructor(props){
        super(props)
        this.state = {
            symbol : props.symbol,
        }
    }
  render() {
    return (
      <div className="chart-info"><div className="chart-info-symbol">{this.state.symbol}</div></div>
    )
  }
}

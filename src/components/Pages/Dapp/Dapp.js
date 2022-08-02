import React, {Component, PureComponent} from 'react'
import "./Dapp.css"

import Chart from "./Chart"

  
export default class Dapp extends Component{

    render() {
        return (
          <div className='layout-01'>
          <div className='container-01'>
            <Chart/>
        </div>
        </div>
        )
      }

      
}


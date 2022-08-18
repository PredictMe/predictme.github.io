import React, { Component } from 'react'
import './Docs.css'
import { text01_line01, Text2, Text3 } from './Text';

export default class Docs extends Component {
  render() {
    return (
      <div className='docs-container'>
        Docs
        <div className='docs-layout-1'>
            <div className='docs-layout-11-number'>1</div>
            <div className='docs-layout-11-box'><div>{text01_line01}</div></div>
        </div>
        <div className='docs-layout-2'>
            <div className='docs-layout-21-number'>2</div>
            <div className='docs-layout-21-box'><div>{Text2}</div> </div>
        </div>
        <div className='docs-layout-3'>
            <div className='docs-layout-31-number'>3</div>
            <div className='docs-layout-31-box'><div>{Text3}</div> </div>
        </div>
      </div>
    )
  }
}


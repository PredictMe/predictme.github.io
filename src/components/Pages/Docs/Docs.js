import React, { Component } from 'react'
import './Docs.css'
import { CodeBlock, dracula } from "react-code-blocks";
import { Text1, Text2, Text3 } from './Text';

export default class Docs extends Component {
  render() {
    return (
      <div className='docs-container'>
        Docs
        <div className='docs-layout-1'>
            <div className='docs-layout-11-number'>1</div>
            <div className='docs-layout-11-box'><CodeBlock text={Text1} language={"text"} showLineNumbers={true} theme={dracula}/> 
        </div>
        </div>
        <div className='docs-layout-2'>
            <div className='docs-layout-21-number'>2</div>
            <div className='docs-layout-21-box'><CodeBlock text={Text2} language={"text"} showLineNumbers={true} theme={dracula}/> </div>
        </div>
        <div className='docs-layout-3'>
            <div className='docs-layout-31-number'>3</div>
            <div className='docs-layout-31-box'><CodeBlock text={Text3} language={"text"} showLineNumbers={true} theme={dracula}/> </div>
        </div>
      </div>
    )
  }
}


import React, { Component } from 'react'
import { TokenItems } from '../../TokenItems'
import './TokenSelector.css'
export default class TokenSelector extends Component {

constructor(props){
    super(props)
    this.state = {
      activeId : props.selectedToken
  }
}



OnClick(event){
    console.log(event.currentTarget.dataset.id)
if(this.state.activeId != event.currentTarget.dataset.id ){
    this.setState({activeId : event.currentTarget.dataset.id})
    this.props.onTokenSelect(event.currentTarget.dataset.id)
}

}

  render() {
    return (
      <ul>
        {
            TokenItems.map((item,index)=>{
            return <li key={index} className={this.state.activeId == item.id ? "token-list active" : "token-list" } onClick={this.OnClick.bind(this)} data-id={item.id}> <span className='token-text-01'>{item.text1}</span><span className='token-text-02'>{item.text2}</span></li>
                })
         }
                    
    </ul>
    )
  }
}

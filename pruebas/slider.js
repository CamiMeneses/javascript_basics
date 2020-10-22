import React from 'react';
import styled from 'styled-components'

export default class Slider extends React.Component {
  state = {
    value: 50
  }

  handleOnChange = (e) => this.setState({value: e.target.value})

  render(){
    return(
      <div >
        <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange}/>
        <div className="value" style={{color: "#00ffff"}}>{this.state.value}</div>
      </div>
    )
  }
}

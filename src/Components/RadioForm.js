import React, { Component } from 'react'

export default class RadioForm extends Component {
    state={radio_on:false}
    handleOptionChange=(ev)=>{
        this.setState({radio_on:JSON.parse(ev.target.value)})
    }
        render() {
        return (
            <div>
            Onko opiskelu kesken?
            <input id="yes" type="radio" className="kesken" onChange={this.handleOptionChange} 
            checked={this.state.radio_on === true} value="true">Kyllä</input>
            <input id="no" type="radio" className="kesken" onChange={this.handleOptionChange} 
            checked={this.state.radio_on === false} value="false">Ei</input>
        </div>
        )
    }
}

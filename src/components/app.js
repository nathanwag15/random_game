import React, { Component } from 'react';
import Banana from "../../static/assets/Images/Banana.jpg"
import Orange from "../../static/assets/Images/Orange.jpg"
import Apple from "../../static/assets/Images/Apple.jpg"
import Mango from "../../static/assets/Images/Mango.jpg"

import WeightedLottery from './weighted_lottery.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      points: 0,
      result: "",
      pick: ""
      // length: this.state.list.length
    }
  }

  weightedLottery = function(event) {

    var length = 4
    var keys = ["Banana", "Banana", "Banana", "Banana", "Banana", "Orange", "Orange", "Orange", "Apple", "Apple", "Mango"]
    var result = Math.floor(Math.random() * keys.length)
    
    this.setState({
      result: keys[result]
    })
    console.log(this.state.pick)
    // return(keys[result])
  }.bind(this);

  handleSubmit = function(event) {
    this.setState({
      pick: event.target.value
    })
    console.log(event.value)
    event.preventDefault();
  }.bind(this)


  render() {
    return (
      <div className='app'>
        <div className="heading-area">
          <h1>
            Random Fruit Game!
          </h1>
        </div>
        <form onSubmit={this.handleSubmit} className="option-presenter">
          <input type="submit" className="banana" style={{backgroundImage: `url(${Banana})`}}  value="Banana"/>
          <div className="orange" style={{backgroundImage: `url(${Orange})`}}>
            Orange
          </div>
          <div className="apple" style={{backgroundImage: `url(${Apple})`}}>
            Apple
          </div>
          <div className="mango" style={{backgroundImage: `url(${Mango})`}}>
            Mango
          </div>
        </form>
        {this.state.result}
      </div>
    );
  }
}

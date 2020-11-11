import React, { Component } from 'react';
import Banana from "../../static/assets/Images/Banana.jpg"
import Orange from "../../static/assets/Images/Orange.jpg"
import Apple from "../../static/assets/Images/Apple.jpg"
import Mango from "../../static/assets/Images/Mango.jpg"


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      points: 0,
      result: "",
      pick: "",
      tries: 0
    }
  }

  weightedLottery = function(fruit) {

    var length = 4
    var keys = ["Banana", "Banana", "Banana", "Banana", "Banana", "Orange", "Orange", "Orange", "Apple", "Apple", "Mango"]
    var result = Math.floor(Math.random() * keys.length)
    
    this.setState({
      result: keys[result],
      pick: fruit, 
      tries: this.state.tries + 1
    })
    
    if (keys[result] == fruit) {
      if (keys[result] == "Banana") {
        this.setState({
          points: this.state.points + 10
        })
      } else if (keys[result] == "Orange") {
        this.setState({
          points: this.state.points + 30
        })
      } else if (keys[result] == "Apple") {
        this.setState({
          points: this.state.points + 60
        })
      } else if (keys[result] == "Mango") {
        this.setState({
          points: this.state.points + 90
        })
      }
    } else {
      if (fruit == "Banana") {
        this.setState({
          points: this.state.points - 1
        })
      } else if (fruit == "Orange") {
        this.setState({
          points: this.state.points - 2
        })
      } else if (fruit == "Apple") {
        this.setState({
          points: this.state.points - 3
        })
      } else if (fruit == "Mango") {
        this.setState({
          points: this.state.points - 4
        })
      }
    }
  }.bind(this);

  enterBanana = function() {
    this.weightedLottery("Banana")
  }.bind(this)

  enterOrange = function() {
    this.weightedLottery("Orange")
  }.bind(this)

  enterApple = function() {
    this.weightedLottery("Apple")
  }.bind(this)

  enterMango = function() {
    this.weightedLottery("Mango")
  }.bind(this)

  comparisonMachine = function() {
    if (this.state.pick == "") {
      return (
        <div>
          Guess what Fruit will come up to begin! Each fruit will give you a different reward and a different risk. 
        </div>
      )
    }
    if (this.state.result == this.state.pick) {
        return (
          <div>
          You win! Your Current Score is {this.state.points}
          </div> 
        )       
    } else if (this.state.result != this.state.pick) { 
      return(<div>You lose Try Again Your Current Score is {this.state.points}</div>);
    } 
  }.bind(this)

  reset = function() {
    this.setState({
      points: 0,
      pick: ""
    })
  }.bind(this)


  render() {
    return (
      <div className='app'>
        <div className="heading-area">
          <h1>
            Random Fruit Game!
          </h1>

          <h1>
            {this.state.points} <br></br>
            {this.state.tries}
          </h1>
        </div>
        <div className="option-presenter">
          <div type="submit" className="banana" style={{backgroundImage: `url(${Banana})`}}  onClick = {this.enterBanana}>
            Banana
          </div>
          <div className="orange" style={{backgroundImage: `url(${Orange})`}} onClick = {this.enterOrange}>
            Orange
          </div>
          <div className="apple" style={{backgroundImage: `url(${Apple})`}} onClick = {this.enterApple}>
            Apple
          </div>
          <div className="mango" style={{backgroundImage: `url(${Mango})`}} onClick = {this.enterMango}>
            Mango
          </div>
        </div>
        <div className="results_wrapper">
            <div className="result">
              {this.comparisonMachine()}
            </div>
          
        </div>
        <div className="button_wrapper" onClick = {this.reset}>
          Restart
        </div>
        
      </div>
    );
  }
}

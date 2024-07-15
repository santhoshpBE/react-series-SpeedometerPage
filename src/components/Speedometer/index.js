// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}
  increaseSpeed  = ()=>{
   this.setState((prevSpeedObj)=>
   {
    if(prevSpeedObj.speed < 200){
      return({speed:prevSpeedObj.speed+10})
    }
    else{
      return null
    }
   })
  }
  decreaseSpeed  = ()=>{
   this.setState((prevSpeedObj)=>
   {
    if(prevSpeedObj.speed > 0){
      return({speed:prevSpeedObj.speed-10})
    }
    else{
      return null
    }
   })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">SPEEDOMETER</h1>
          <img
            className="card-image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="card-para">Speed is {speed}mph</h1>
          <p className="card-para-2">Min limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button onClick ={this.increaseSpeed} className="card-button">Accelerate</button>
            <button onClick ={this.decreaseSpeed} className="card-brake-button">Apply Brake</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer

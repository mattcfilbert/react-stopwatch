import React, { Component } from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      go: false
    }
    this.clickStart = this.clickStart.bind(this)
    this.clickPause = this.clickPause.bind(this)
    this.clickReset = this.clickReset.bind(this)
  }

  clickStart () {
    if (!this.state.go) {
      this.setState({
        go: setInterval(() => {
          if (this.state.go) {
            this.setState({
              time: this.state.time + 1
            })
          }
        }, 1000)})
    }
  }

  clickPause () {
    clearInterval(this.state.go)
    if (this.state.go) {
      this.setState({
        go: null
      })
    }
    console.log('pause', this.state.go)
  }

  clickReset () {
    this.setState({
      time: 0
    })
    this.clickPause()
  }

  render () {
    console.log(this.state.time)
    let display = (
      <div className='stopwatch'>
        <h1 style={{textDecoration: 'underline'}}>ZERO</h1>
        <div className='controls'>
          <button onClick={this.clickStart}>Start</button>
        </div>
      </div>
  )
    if (this.state.time) {
      display = (<div className='stopwatch'>
        <h1>{this.state.time}</h1>
        <div className='controls'>
          <button onClick={this.clickReset}>Reset</button>
          <button onClick={this.clickStart}>Start</button>
          <button onClick={this.clickPause}>Pause</button>
        </div>
      </div>)
    }

    return (
    display
    )
  }
}

export default Stopwatch

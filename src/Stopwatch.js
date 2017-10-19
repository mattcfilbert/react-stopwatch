import React, { Component } from 'react'
import './Stopwatch.css'

document.addEventListener('contextmenu', event => event.preventDefault());

class Stopwatch extends Component {
  constructor () {
    super()
    this.state = {
      time: 10,
      go: false,
      count: 1000
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
              time: this.state.time - 1
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
      time: 10,
      count: 1000
    })
    document.getElementById("text").value = "";
    this.clickPause()
  }

  handleKeyPress = (event) => {

    if (!this.state.go) {
      this.clickStart()
    }

    this.setState({
      time: 10
    })

    var my_string = document.getElementById("text").value
    var spaceCount = (my_string.split(" ").length - 1)
    this.setState({
      count: 1000 - spaceCount
    })

    if (this.state.count < 1) {
      this.clickPause()
    }


}

  render () {
    console.log(this.state.time)
    let display = (
      <div className='stopwatch'>
        <h1 style={{textDecoration: 'underline'}}>THIRTY SECONDS TO LIVE</h1>
        <div className='controls'>
          <button onClick={this.clickStart}>Start</button>
        </div>
      </div>
  )

    if (this.state.time) {
      display = (<div className='stopwatch'>
        <h1>{this.state.time}</h1>
        <div className='controls'>

          <button onClick={this.clickStart}>Start</button>
          <button onClick={this.clickReset}>Scrap</button>

          <div>
          <h5>Words left:</h5>
          <h4 id="count">{this.state.count}</h4>
          <textarea style={{ opacity: this.state.time/10 }} rows="33" cols="170" id="text" onKeyPress={this.handleKeyPress}></textarea>

        </div>
        </div>
      </div>)
    }
    else {
      this.clickReset()
    }

    return (
    display
    )
  }
}


export default Stopwatch

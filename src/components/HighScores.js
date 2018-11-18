import React, { Component } from 'react'
import spinningWrapper from '../HOC/spinningWrapper'

class HighScores extends Component {
  displayScores = () => this.props.highScores.length > 0 ?
    this.props.highScores.map(highScore => (
      <p>
        Name: {highScore.name}<br/>
        Avg Speed: {highScore.average_speed}<br/>
        Distance: {highScore.distance}
      </p>
    ))
    :
    <>No scores exist</>

  render() {
    return (
      <div>
        { this.displayScores() }
      </div>
    )
  }
}

export default spinningWrapper(HighScores)

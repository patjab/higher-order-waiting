import React, { Component } from 'react';
import './App.css';

import HighScores from './components/HighScores'

class App extends Component {
  state = {
    highScores: null
  }

  componentDidMount() {
    fetch('https://impatience-api.herokuapp.com/api/v1/high_scores')
    .then(r => r.json())
    .then(data => {
      setTimeout(() => {
        this.setState({ highScores: data})
      }, 2000)
    })
  }

  render() {
    return (
      <div className="App">
        <HighScores highScores={this.state.highScores} />
      </div>
    )
  }
}

export default App;

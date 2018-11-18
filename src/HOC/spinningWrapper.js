import React, { Component } from 'react'

export default (WrappedComponent) => {
  return class extends Component {
    render() {
      return this.props.highScores ? <WrappedComponent {...this.props}/> : <img src="spinning.gif" alt="spinning wait"/>
    }
  }
}

// export default (WrappedComponent) => {
//   return function(args) {
//     return WrappedComponent(args)
//   }
// }

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Room from './components/room'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header />
        <div id='container' className='ui container'>
          <Room />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))

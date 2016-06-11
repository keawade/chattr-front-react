import React, { Component } from 'react'

class RoomForm extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='ui fluid action input'>
        <input type='text' placeholder='Reply...' />
        <div className='ui button primary'>
          <i className='send icon'></i>
        </div>
      </div>
    )
  }
}

export default RoomForm

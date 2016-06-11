import React, { Component } from 'react'
import RoomForm from './room/form'
import MessageList from './room/message-list'

class Room extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: [{
        _id: '000',
        username: 'keawade',
        date: Date.now() - 60 * 60 * 24 * 3,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '001',
        username: 'keawade',
        date: Date.now() - 60 * 60 * 24 * 1,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '002',
        username: 'keawade',
        date: Date.now() - 60 * 60 * 3,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '003',
        username: 'keawade',
        date: Date.now() - 60 * 60 * 1,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '004',
        username: 'keawade',
        date: Date.now() - 60 * 54,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '005',
        username: 'keawade',
        date: Date.now() - 60 * 1,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '006',
        username: 'keawade',
        date: Date.now(),
        message: 'Yo, check out my date/time management!'
      }]
    }
  }
  render () {
    return (
      <div className='ui one column grid'>
        <div className='column'>
          <MessageList messages={this.state.messages} />
          <RoomForm />
        </div>
      </div>
    )
  }
}

export default Room

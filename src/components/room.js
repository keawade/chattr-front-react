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
        avatarUrl: 'resource/images/keawade.png',
        date: Date.now() - 60 * 60 * 24 * 3,
        message: 'Yo, check out my date/time management! What happens if I have a super duper long string that tries to wrap to the next line? Is this long enough yet? Okay, looks like the container is too narrow because of the base "comments" element size... Now it\'s fixed!'
      },
      {
        _id: '001',
        username: 'nathanbland',
        avatarUrl: 'resource/images/nathanbland.png',
        date: Date.now() - 60 * 60 * 24 * 1,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '002',
        username: 'crodeheaver',
        avatarUrl: 'resource/images/crodeheaver.png',
        date: Date.now() - 60 * 60 * 3,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '003',
        username: 'keawade',
        avatarUrl: 'resource/images/keawade.png',
        date: Date.now() - 60 * 60 * 1,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '004',
        username: 'nathanbland',
        avatarUrl: 'resource/images/nathanbland.png',
        date: Date.now() - 60 * 54,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '005',
        username: 'crodeheaver',
        avatarUrl: 'resource/images/crodeheaver.png',
        date: Date.now() - 60 * 1,
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '006',
        username: 'keawade',
        avatarUrl: 'resource/images/keawade.png',
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

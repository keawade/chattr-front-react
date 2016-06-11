import React, { Component } from 'react'
import RoomForm from './room/form'
import MessageList from './room/message-list'
import UserList from './room/user-list'

class Room extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: [{
        _id: '000',
        username: 'keawade',
        avatarUrl: 'resource/images/keawade.png',
        date: timePrint(Date.now() - 60 * 60 * 24 * 3),
        message: 'Yo, check out my date/time management! What happens if I have a super duper long string that tries to wrap to the next line? Is this long enough yet? Okay, looks like the container is too narrow because of the base "comments" element size... Now it\'s fixed!'
      },
      {
        _id: '001',
        username: 'nathanbland',
        avatarUrl: 'resource/images/nathanbland.png',
        date: timePrint(Date.now() - 60 * 60 * 24 * 1),
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '002',
        username: 'crodeheaver',
        avatarUrl: 'resource/images/crodeheaver.png',
        date: timePrint(Date.now() - 60 * 60 * 3),
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '003',
        username: 'keawade',
        avatarUrl: 'resource/images/keawade.png',
        date: timePrint(Date.now() - 60 * 60 * 1),
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '004',
        username: 'nathanbland',
        avatarUrl: 'resource/images/nathanbland.png',
        date: timePrint(Date.now() - 60 * 54),
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '005',
        username: 'crodeheaver',
        avatarUrl: 'resource/images/crodeheaver.png',
        date: timePrint(Date.now() - 60 * 1),
        message: 'Yo, check out my date/time management!'
      },
      {
        _id: '006',
        username: 'keawade',
        avatarUrl: 'resource/images/keawade.png',
        date: timePrint(Date.now()),
        message: 'Yo, check out my date/time management!'
      }],
      users: [
        {
          username: 'keawade',
          date: timePrint(Date.now()),
          avatarUrl: 'resource/images/keawade.png'
        },
        {
          username: 'crodeheaver',
          date: timePrint(Date.now() - 60 * 1),
          avatarUrl: 'resource/images/crodeheaver.png'
        },
        {
          username: 'nathanbland',
          date: timePrint(Date.now() - 60 * 54),
          avatarUrl: 'resource/images/nathanbland.png'
        }
      ]
    }
  }
  render () {
    return (
      <div className='ui one column grid'>
        <div className='eleven wide column'>
          <MessageList messages={this.state.messages} />
          <RoomForm />
        </div>
        <div className='five wide column'>
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
}

function timePrint (dateTime) {
  const minutes = Math.floor((Date.now() - dateTime) / 60)
  if (minutes === 0) {
    return 'Less than a minute ago'
  }
  if (minutes <= 1) {
    return 'About a minute ago'
  }
  if (minutes > 55) {
    const hours = Math.floor(minutes / 60)
    if (hours <= 1) {
      return 'An hour ago'
    }
    if (hours > 23) {
      const days = Math.floor(hours / 24)
      if (days <= 1) {
        return 'A day ago'
      }
      return `${days} days ago`
    }
    return `${hours} hours ago`
  }
  return `${minutes} minutes ago`
}

export default Room

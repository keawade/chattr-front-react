import React, { Component } from 'react'
import io from 'socket.io-client'
import RoomForm from './room/form'
import MessageList from './room/message-list'
import UserList from './room/user-list'

const socket = io('https://chattr-back.herokuapp.com')

class Room extends Component {
  constructor (props) {
    super(props)

    this.state = {
      localUser: 'keawade',
      messages: [],
      users: [
        {
          username: 'keawade',
          date: timePrint(Date.now()),
          avatarUrl: 'resource/images/keawade.png'
        },
        {
          username: 'crodeheaver',
          date: timePrint(Date.now() - 1000 * 60 * 1),
          avatarUrl: 'resource/images/crodeheaver.png'
        },
        {
          username: 'nathanbland',
          date: timePrint(Date.now() - 1000 * 60 * 54),
          avatarUrl: 'resource/images/nathanbland.png'
        }
      ]
    }
  }
  componentDidMount () {
    socket.emit('connected', {user: this.state.localUser})
    socket.on('message', message => this.onMessage(message))
  }
  onMessage (data) {
    this.setState({messages: this.state.messages.concat([data])})
  }
  render () {
    return (
      <div className='ui one column grid'>
        <div className='eleven wide column'>
          <MessageList messages={this.state.messages} />
          <RoomForm socket={socket} />
        </div>
        <div className='five wide column'>
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }

}

function timePrint (dateTime) {
  const minutes = Math.floor((Date.now() - dateTime) / 1000)
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

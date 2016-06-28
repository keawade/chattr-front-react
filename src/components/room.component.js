import React, { Component } from 'react'
import RoomForm from './room-form.component'
import MessageList from './room-message-list.component'
import UserList from './room-user-list.component'

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
          avatarUrl: 'src/resources/images/keawade.png'
        },
        {
          username: 'crodeheaver',
          date: timePrint(Date.now() - 1000 * 60 * 1),
          avatarUrl: 'src/resources/images/crodeheaver.png'
        },
        {
          username: 'nathanbland',
          date: timePrint(Date.now() - 1000 * 60 * 54),
          avatarUrl: 'src/resources/images/nathanbland.png'
        }
      ]
    }
  }
  componentDidMount () {
  }
  onMessage (data) {
    this.setState({messages: this.state.messages.concat([data])})
  }
  render () {
    return (
      <div className='ui one column grid'>
        <div className='eleven wide column'>
          <MessageList messages={this.state.messages} socket={this.props.socket} />
          <RoomForm socket={this.props.socket} />
        </div>
        <div className='five wide column'>
          <UserList users={this.state.users} socket={this.props.socket}/>
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

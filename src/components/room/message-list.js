import React from 'react'
import MessageListItem from './message-list-item'

const MessageList = (props) => {
  const messages = props.messages.map(message => {
    return (
      <MessageListItem key={message._id} message={message} />
    )
  })
  return (
    <div className='ui comments'>
      {messages}
    </div>
  )
}

export default MessageList

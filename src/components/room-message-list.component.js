import React from 'react'
import MessageListItem from './message-list-item'

const MessageList = (props) => {
  const messages = props.messages.map(message => {
    return (
      <MessageListItem message={message} />
    )
  })
  return (
    <div className='ui segment'>
      <div className='ui comments chattr-message-list'>
        {messages}
      </div>
    </div>
  )
}

export default MessageList

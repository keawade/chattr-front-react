import React from 'react'

const MessageListItem = (props) => {
  const message = props.message
  return (
    <div className='comment chattr-message'>
      <a className='avatar'>
        <img src={message.avatarUrl} />
      </a>
      <div className='content'>
        <a className='author'>{message.username}</a>
        <div className='metadata'>
          <span className='date'>{message.date}</span>
        </div>
        <div className='text'>
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default MessageListItem

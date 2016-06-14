import React from 'react'

const MessageListItem = (props) => {
  const message = props.message
  const date = timePrint(message.date)
  return (
    <div className='comment chattr-message'>
      <a className='avatar'>
        <img src='resource/images/keawade.png' />
      </a>
      <div className='content'>
        <a className='author'>{message.user}</a>
        <div className='metadata'>
          <span className='date'>{date}</span>
        </div>
        <div className='text'>
          {message.content}
        </div>
      </div>
    </div>
  )
}

function timePrint (dateTime) {
  const minutes = Math.floor((Date.now() - dateTime) / 60 / 1000)
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

export default MessageListItem

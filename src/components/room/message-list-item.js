import React from 'react'

const MessageListItem = (props) => {
  const message = props.message
  const date = timePrint(message.date)
  const avatarSrc = `resource/images/${message.username}.png`
  return (
    <div className='comment'>
    <a className='avatar'>
      <img src={avatarSrc} />
    </a>
    <div className='content'>
      <a className='author'>{message.username}</a>
      <div className='metadata'>
        <span className='date'>{date}</span>
      </div>
      <div className='text'>
        {message.message}
      </div>
    </div>
  </div>
  )
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

export default MessageListItem

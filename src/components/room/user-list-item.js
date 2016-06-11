import React from 'react'

const UserListItem = (props) => {
  const date = props.user.date.toLowerCase()
  return (
    <div className='item'>
      <img className='ui avatar image' src={props.user.avatarUrl} />
      <div className='content'>
        <div className='header'>{props.user.username}</div>
        <div className='description'>Last seen {date}.</div>
      </div>
    </div>
  )
}

export default UserListItem

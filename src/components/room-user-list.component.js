import React from 'react'
import UserListItem from './user-list-item'

const UserList = (props) => {
  const userElements = props.users.map(user => {
    return (
      <UserListItem key={user.username} user={user} />
    )
  })
  return (
    <div className='ui segment'>
      <div className='ui list'>
        {userElements}
      </div>
    </div>
  )
}

export default UserList

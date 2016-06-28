import React from 'react'
import UserListItem from './room-user-list-item.component'

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

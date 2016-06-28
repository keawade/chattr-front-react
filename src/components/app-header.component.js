import React from 'react'

const ChattrHeader = (props) => {
  var inOrOut = 'sign in icon'
  if (false) { // If logged in
    inOrOut = 'sign out icon'
  }
  return (
    <div className='ui fixed main huge icon menu'>
      <div className='item chattr-header-name'>
        chattr
      </div>
      <a href='/' className='item'>
        <i className='comments icon' />
      </a>
      <a href='/add' className='item'>
        <i className='icons'>
          <i className='comment icon'></i>
          <i className='corner add icon'></i>
        </i>
      </a>
      <div className='right menu'>
        <a href='https://github.com/keawade/chattr-front-react/issues' className='item'>
          <i className='bug icon' />
        </a>
        <a href='https://github.com/keawade/chattr-front-react' className='item'>
          <i className='fork icon' />
        </a>
        <a href='/login' className='item'>
          <i className={inOrOut} />
        </a>
      </div>
    </div>
  )
}

export default ChattrHeader

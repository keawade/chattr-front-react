import React from 'react'

const Header = (props) => {
  return (
    <div className='ui top fixed huge icon menu'>
      <a href='/' className='item'>
        chattr
      </a>
      <a className='item'>
        <i className='comments icon' />
      </a>
      <a className='item'>
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
        <a className='item'>
          <i className='sign out icon' />
        </a>
      </div>
    </div>
  )
}

export default Header

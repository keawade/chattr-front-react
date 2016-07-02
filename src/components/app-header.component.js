import React, { Component } from 'react'
import { Link } from 'react-router'

class ChattrHeader extends Component {
  loginButton() {
    if (this.props.auth.loggedIn()) {
      return (
        <Link onClick={this.props.auth.logout} to='/chat' className='item'>
          <i className='sign out icon' />
        </Link>
      )
    } else {
      return (
        <a onClick={this.props.auth.login} className='item'>
          <i className='sign in icon' />
        </a>
      )
    }
  }
  
  render() {
    return (
      <div className='ui fixed main huge icon menu'>
        <div className='item chattr-header-name'>
          chattr
        </div>
        <Link to='/' className='item'>
          <i className='comments icon' />
        </Link>
        <Link to='/add' className='item'>
          <i className='icons'>
            <i className='comment icon'></i>
            <i className='corner add icon'></i>
          </i>
        </Link>
        <div className='right menu'>
          <a href='https://github.com/keawade/chattr-front-react/issues' className='item'>
            <i className='bug icon' />
          </a>
          <a href='https://github.com/keawade/chattr-front-react' className='item'>
            <i className='fork icon' />
          </a>
          {this.loginButton()}
        </div>
      </div>
    )
  }
}

export default ChattrHeader

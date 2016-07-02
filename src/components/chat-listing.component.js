import React, { Component } from 'react'
import { Link } from 'react-router'

const tempArray = [{name: 'Team Super Awesome', users: 42}, {name: 'what/is/this/whyyy', users: 1}, {name: 'another/room/over/here', users: 5}, {name: 'one/last/test/room/okay', users: 7}]

class ChatListing extends Component {
  renderListItem(data) {
    const url = `/${data.name}`
    return (
      <div key={data.name} className='item'>
        <i className='large comment outline middle aligned icon'></i>
        <div className='content'>
          <Link to={url} className='header'>{data.name}</Link>
          <div className='description'>{data.users} users</div>
        </div>
      </div>
    )
  }

  renderList() {
    return tempArray.map(this.renderListItem)
  }

  render() {
    return (
      <div className='ui relaxed divided list'>
        {this.renderList()}
      </div>
    )
  }
}

export default ChatListing

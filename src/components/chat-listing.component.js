import React, { Component } from 'react'

const tempArray = [{name: '/test/chat/room42', users: 42}, {name: '/what/is/this/whyyy', users: 1}, {name: '/another/room/over/here', users: 5}, {name: '/one/last/test/room/okay', users: 7}]

class ChatListing extends Component {
  renderListItem(data) {
    return (
      <div key={data.name} className='item'>
        <i className='large comment outline middle aligned icon'></i>
        <div className='content'>
          <a href={data.name} className='header'>{data.name}</a>
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

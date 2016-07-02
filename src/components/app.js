import React, { Component } from 'react';
import ChattrHeader from './app-header.component'

import io from 'socket.io-client'

const socket = io('https://chattr-back-keawade.c9users.io')

export default class App extends Component {
  componentWillMount() {
    socket.on('connect', function (data) {
      socket.emit('authenticate', { token: userToken }); // send the jwt
    })
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth, // TODO: put into a utils
        socket: socket // TODO: put into a utils
      })
    }

    return (
      <div>
        <ChattrHeader />
        <div id='container' className='ui container'>
          {children}
        </div>
      </div>
    );
  }
}

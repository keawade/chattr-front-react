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
    return (
      <div>
        <ChattrHeader auth={this.props.route.auth} />
        <div id='container' className='ui container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

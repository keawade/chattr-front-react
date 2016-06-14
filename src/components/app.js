import React, { Component } from 'react';
import ChattrHeader from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChattrHeader />
        <div id='container' className='ui container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import ChattrHeader from './app-header.component'

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

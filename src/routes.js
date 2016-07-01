import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/app'

import ChatListing from './components/chat-listing.component'
import Add from './components/add.component'
import About from './components/about.component'
import Chat from './components/chat.component'
import Room from './components/room.component'

import auth from './utils/AuthService'


const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/chat' })
  }
}

export default (
  <Route path='/' component={App} auth={auth}>
    <IndexRedirect to='chat' />
    <Route path='chat' component={ChatListing} />
    <Route path='add' component={Add} onEnter={requireAuth} />
    <Route path='*' component={Room} onEnter={requireAuth} />
  </Route>
)

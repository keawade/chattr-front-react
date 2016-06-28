import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/app'

import ChatListing from './components/chat-listing.component'
import Add from './components/add.component'
import About from './components/about.component'
import Chat from './components/chat.component'
import Room from './components/room.component'

import AuthService from './utils/AuthService'

var auth = new AuthService('NcdEWZ7kwNyzJFvmNGhTgTh0PbBrXy5V', 'keawade.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/about' })
  }
}

export default (
  <Route path='/' component={App} auth={auth}>
    <IndexRedirect to='/chat' />
    <Route path='about' component={About} />
    <Route path='chat' component={ChatListing} onEnter={requireAuth} />
    <Route path='add' component={Add} onEnter={requireAuth} />
    <Route path='*' component={Room} onEnter={requireAuth} />
  </Route>
)

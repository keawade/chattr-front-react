import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'

import ChatListing from './components/chat-listing.component'
import Add from './components/add.component'
import Login from './components/login.component'
import Chat from './components/chat.component'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ChatListing} />
    <Route path='add' component={Add} />
    <Route path='login' component={Login} />
    <Route path='*' component={Chat} />
  </Route>
)

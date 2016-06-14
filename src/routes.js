import React from 'react'
import { Route, IndexRoute } from 'react-Router'

import App from './components/app'

const TestComponent = () => {
  return (
    <div>This is only a test.</div>
  )
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={TestComponent} />
    <Route path='index' component={TestComponent} />
    <Route path='chats' component={TestComponent} />
    <Route path='new' component={TestComponent} />
    <Route path='login' component={TestComponent} />
  </Route>
)

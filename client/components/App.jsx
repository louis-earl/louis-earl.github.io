// Packages
import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

// Components 
import Home from './Home'
import NotFound from './NotFound'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  )
}

export default App

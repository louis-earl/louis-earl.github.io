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
      <Route exact path="/oops" component={NotFound} />
      <Redirect to="/oops" />
    </Switch>
  )
}

export default App

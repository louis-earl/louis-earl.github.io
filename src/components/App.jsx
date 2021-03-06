// Packages
import React from 'react'
import { Route, Switch } from 'react-router'

// Components 
import Home from './home/Home'
import MidnightMysteries from './projects/MidnightMysteries'
import NotFound from './NotFound'
import NotReady from './NotReady'
import OWW from './projects/OWW'
import ShowMeTheMoney from './projects/ShowMeTheMoney'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/midnight-mysteries" component={MidnightMysteries} />
      <Route exact path="/one-way-wellington" component={OWW} />
      <Route exact path="/super-racer-go" component={NotReady} />
      <Route exact path="/show-me-the-money" component={ShowMeTheMoney} />
      <Route exact path="/portfolio" component={NotReady} />
      <Route exact path="/research" component={NotReady} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App

// Packages
import React from 'react'
import { Route } from 'react-router'

// Components 
import Home from './Home'
import MidnightMysteries from './MidnightMysteries'

function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/midnight-mysteries' component={MidnightMysteries} />
    </>
  )
}

export default App

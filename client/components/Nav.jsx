import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import continentsAll from '../../data/continents.js'

function Nav(props) {
  function getContinents() {
    const location = useLocation();
    console.log(location.pathname)

    return Object.keys(continentsAll)
      .map((c) => {
        return <Link key={c} to={'/continents/' + c}>
          <li className="current-selection">{c}</li>
        </Link>
      })
  }

  return (
    <div className="nav">
      <h2>Nav</h2>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
      <ul>
        {getContinents()}
      </ul>
    </div >
  )
}

export default Nav

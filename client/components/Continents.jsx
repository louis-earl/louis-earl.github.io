import React from 'react'
import { Link } from 'react-router-dom';

import continents from '../../data/continents.js'

function Continents (props) {


  const name = props.match.params.name

  const continent = continents[name]




  function getCountries () {
  return continent.countries.map(c => <Link key={c.code} to = {'/continents/' + name + '/' + c.code}><li>{c.name}</li></Link>
)

  }

  return (
    <div>
      <h2>{name}</h2>
      <img src={'images/' + continent.image}></img>
      <ul>
        {getCountries()}
      </ul>
    </div >
  )
}

export default Continents
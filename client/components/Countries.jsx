import React from 'react'
import { Link } from 'react-router-dom';

import continents from '../../data/continents.js'
import countries from '../../data/countries.js'


function Countries (props) {

  const code = props.match.params.code
  const country = countries.find(c => c.code == code)

  
  console.log(country)
  
  return (
    <div>
        <h1>{country.name}</h1>
      <ul>
        <li>Capital City: {country.capital}</li>
        <li>Area: {country.areaSqKms}</li>
        <li>Population: {country.population}</li>
        <li>Currency Code: {country.currencyCode}</li>
        <li>Currency Name: {country.currencyName}</li>
        <li>Neighbours: {country.neighbours}</li>
        <li>Flag: {country.flag}</li>
      </ul>
    </div>
  )
}

export default Countries
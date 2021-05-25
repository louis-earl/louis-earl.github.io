import React from 'react'

import { getColor } from '../util/color'

function TechLabel({ label }) {

  const color = getColor(label)
  console.log("color", color)

  return (
    <div className="tech-label" style={{backgroundColor: color}}>
      <p>{label}</p>
    </div>
  )
}

export default TechLabel

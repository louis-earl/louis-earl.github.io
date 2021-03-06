import React from 'react'

import { getColor } from '../../util/color'

function TechLabel({ label }) {

  const color = getColor(label)

  return (
    <div className="tech-label" style={{borderColor: color}}>
      <p>{label}</p>
    </div>
  )
}

export default TechLabel

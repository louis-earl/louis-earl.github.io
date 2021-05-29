import React, { useEffect } from 'react'

import '../oww.css'
import OWWContent from './OWWContent'

function OWW() {

  return (
    <div className="oww">
      <div className="starfield__wrapper">
      </div>
      <div className="corridor__wrapper">
        <img className="corridor" src="./images/oww-corridor.svg" />
      </div>
      
      <div className="viewport">
        <OWWContent />
      </div>

    </div>

  )
}

export default OWW

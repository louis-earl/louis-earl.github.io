import React, { useEffect, useRef } from 'react'

import { start } from '../util/starfield'

function Canvas() {

  const canvasRef = useRef(null)

  useEffect(() => {
    start(canvasRef.current)
  }, [])

  return (
    <div
      className="starfield__wrapper"
    // onmousedown="context.fillStyle='rgba(0,0,0,'+opacity+')'"
    // onmouseup="context.fillStyle='rgb(0,0,0)'"
    >

      <canvas id="starfield" ref={canvasRef} />

    </div>
  )
}

export default Canvas

import React, { useEffect, useRef } from 'react'

import { start, resize } from '../util/starfield'

function Canvas() {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    start(canvas)
  }, [])

  return (
    <div
      className="starfield__wrapper"
      // onresize={resize(canvasRef.current)}
      // onorientationchange={resize(canvasRef.current)}
    // onmousedown="context.fillStyle='rgba(0,0,0,'+opacity+')'"
    // onmouseup="context.fillStyle='rgb(0,0,0)'"
    >

        <canvas id="starfield" ref={canvasRef} />

    </div>
  )
}

export default Canvas

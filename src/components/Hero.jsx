import React from 'react'
import Scroll3D from './Scroll3D'
import Starfield from './Starfield'

function Hero() {

  const content = [
    <>
      <h1 className="hero__title">Louis Earl</h1>
      <h2 className="hero__subtitle">Software&nbsp;Developer&nbsp;for Web&nbsp;&&nbsp;Video&nbsp;Games</h2>
    </>
  ]

  return (
    <div id="hero" className="hero">
      <Starfield />
      <Scroll3D content={content} zIndex={-1} offsetY={"-100%"}/>
    </div>
  )
}

export default Hero

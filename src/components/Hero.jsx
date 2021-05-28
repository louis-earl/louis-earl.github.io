import React, { useEffect } from 'react'
import Canvas from './Canvas'

function Hero() {

  useEffect(() => {
  window.onscroll = () => scrollFunction() 
  window.onresize = () => scrollFunction()

  return () => {
    window.onscroll = null
    window.onresize = null
  }
  },[])


  function scrollFunction() {
    const scrollY = window.scrollY

    // remove inline style to get base sizes 
    const heroTitleElement = document.getElementById("hero-title")
    const heroSubtitleElement = document.getElementById("hero-subtitle")

    heroTitleElement.removeAttribute("style")
    heroSubtitleElement.removeAttribute("style")

    const baseTitleSize = window.getComputedStyle(heroTitleElement, null).getPropertyValue('font-size');
    const baseSubtitleSize = window.getComputedStyle(heroSubtitleElement, null).getPropertyValue('font-size');

    if (scrollY < (window.screen.height * 0.8)) {
      const titleSize = parseInt(baseTitleSize, 10) - (scrollY / 10.5)
      const subtitleSize = parseInt(baseSubtitleSize, 10) - (scrollY / 45)

      heroTitleElement.style.fontSize = (titleSize + "px")
      heroSubtitleElement.style.fontSize = (subtitleSize + "px")
      heroTitleElement.style.marginTop = (scrollY / 0.75 + "px")
      document.getElementById("hero").style.boxShadow = ("inset 0px " + -scrollY / 5 + "px #000000FF")
    }
  }

  return (
    <div id="hero" className="hero">
      <Canvas />
      <h1 id="hero-title">Louis Earl</h1>
      <h2 id="hero-subtitle">Software&nbsp;Developer&nbsp;for Web&nbsp;&&nbsp;Video&nbsp;Games</h2>
    </div>
  )
}

export default Hero

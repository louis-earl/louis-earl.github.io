import React, { useEffect } from 'react'

import '../oww.css'

function OWW() {

  useEffect(() => {
    window.onscroll = () => scrollFunction()
    window.onresize = () => scrollFunction()

    return () => {
      window.onscroll = null
      window.onresize = null
    }
  }, [])

  function scrollFunction() {
    const scrollY = window.scrollY

    // remove inline style to get base sizes 
    const owwLogoElement = document.getElementById("oww-logo")
    const frame01Element = document.getElementById("oww-frame-01")

    owwLogoElement.removeAttribute("style")
    frame01Element.removeAttribute("style")

    const baseLogoHeight = window.getComputedStyle(owwLogoElement, null).getPropertyValue('height')
    const baseFrame01Size = window.getComputedStyle(frame01Element, null).getPropertyValue('height')

    let logoHeight = parseInt(baseLogoHeight, 10) - (scrollY / 2.5)
    let frame01Height = parseInt(baseFrame01Size, 10) - ((scrollY ) / 1.5)

    // let header01Size = baseHeaderSize
    // if (scrollY > 100) {
    //   header01Size = parseInt(baseHeaderSize, 10) - ((scrollY - 300) / 16)
    // }

    if (logoHeight < 0) logoHeight = 0
    if (frame01Height < 0) frame01Height = 0

    owwLogoElement.style.height = (logoHeight + "px")
    owwLogoElement.style.marginTop = (scrollY / 0.466 + "px")

    frame01Element.style.height = (frame01Height + "px")
    frame01Element.style.marginTop = ((scrollY + 500) / 2 + "px")



  }


  return (
    <div className="oww">
      <div className="starfield__wrapper">
      </div>
      <div className="corridor__wrapper">
        <img className="corridor" src="./images/oww-corridor.svg" />
      </div>

      <div className="oww-content__wrapper">
        <img id="oww-logo" className="oww-logo" src="./images/oww-logo.png" />
      </div>

      <div className="oww-content__wrapper" >
        <img id="oww-frame-01" className="oww-frame" src="./images/oww-frame-01.svg" />
      </div>

      <div className="oww-content__wrapper" >
        <div className="oww-content__card">
          <img className="oww-ship" src="./images/oww-ship.jpg" />
        </div>
      </div>

      <div className="oww-content__wrapper" >
        <div className="oww-content__card">
          <h3>My Involvement</h3>
          <p>
            As the Creator and Developer of One Way Wellington, I've been responsible for everything from ideation to production and release. This solo project has been an exciting venture because I’ve pursued what I love, designing and programming video games, while taking the project through the entire production pipeline alongside Wellington-based client, WellingtonNZ.
          </p>
        </div>
      </div>

    </div>

  )
}

export default OWW

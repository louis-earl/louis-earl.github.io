import React, { useEffect } from 'react'

import '../oww.css'

function OWW() {

  useEffect(() => {
    window.onscroll = () => scrollFunction()
    window.onresize = () => scrollFunction()
    scrollFunction()

    return () => {
      window.onscroll = null
      window.onresize = null
    }
  }, [])

  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max)
}

  function scrollFunction() {
    let scrollY = window.scrollY
    const halfScreenHeight = window.screen.height

    const elementIDs = ["oww-logo", "oww-frame-01", "oww-ship"]

    const elements = elementIDs.map((e) => {
      const arr = Array(5)
      // id name
      arr[0] = e

      // html element ref
      arr[1] = document.getElementById(e) 

      // remove inline style to get base sizes 
      arr[1].removeAttribute("style")

      // base height 
      arr[2] = window.getComputedStyle(arr[1], null).getPropertyValue('height')

      // calculate height - todo scale instead
      arr[3] = parseInt(arr[2], 10) - ((scrollY - arr[1].offsetTop) / 3)
      arr[3] = clamp(arr[3], 0, 1000)

      // apply height 
      arr[1].style.height = arr[3] + "px"

      // calculate margin top 
      arr[4] = (scrollY - arr[1].offsetTop + halfScreenHeight)/2
      arr[4] = clamp(arr[4], 0, 1000)

      // apply margin top
      arr[1].style.marginTop = arr[4] + "px"

      return arr

    })


    // owwLogoElement.style.transform = ("scale(" + 1 + ")" )



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
          <img id="oww-ship" className="oww-ship" src="./images/oww-ship.jpg" />
        </div>
      </div>

      {/* <div className="oww-content__wrapper" >
        <div className="oww-content__card">
          <h3>My Involvement</h3>
          <p>
            As the Creator and Developer of One Way Wellington, I've been responsible for everything from ideation to production and release. This solo project has been an exciting venture because I’ve pursued what I love, designing and programming video games, while taking the project through the entire production pipeline alongside Wellington-based client, WellingtonNZ.
          </p>
        </div>
      </div> */}

    </div>

  )
}

export default OWW

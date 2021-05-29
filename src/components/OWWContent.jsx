import React, { useEffect } from 'react'

function OWWContent() {


  const itemZ = 2
  const cameraSpeed = 150


  useEffect(() => {
    setSceneHeight()

    window.onscroll = () => moveCamera()
    window.onresize = () => moveCamera()

    return () => {
      window.onscroll = null
      window.onresize = null
    }
  }, [])

  function moveCamera() {
    document.documentElement.style.setProperty("--cameraZ", window.pageYOffset)
  }

  function setSceneHeight() {
    const numberOfItems = 4

    const scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"))

    const height = window.innerHeight + scenePerspective * cameraSpeed + itemZ * cameraSpeed * numberOfItems

    document.documentElement.style.setProperty("--viewportHeight", height)
  }


  return (

    <div className="scene3D-container">
      <div className="scene3D">

        <div
          style={{ transform: "translate3D(0, 0, " + (itemZ * cameraSpeed * -1) + "px)" }}
        >
          <img className="oww-logo" src="./images/oww-logo.png" />
        </div>

        <div className="oww-card"
          style={{ transform: "translate3D(0, 0, " + (itemZ * cameraSpeed * -2) + "px)" }}
        >
          <h3>To infinity, and beyond!</h3>
          <p>This is some text</p>
        </div>

        <div className="oww-card"
          style={{ transform: "translate3D(0, 0, " + (itemZ * cameraSpeed * -3) + "px)" }}
        >
          <h3>Hey, I've seen this before!</h3>
          <p>This is some more text, woohoo!</p>
        </div>

      </div>
    </div>

  )
}

export default OWWContent

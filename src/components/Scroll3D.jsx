import React, { useEffect } from 'react'

function Scroll3D({ content }) {


  const itemZ = 3
  const cameraSpeed = 150
  const zOffset = -200


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
    const numberOfItems = 3

    const scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"))

    const height = window.innerHeight + scenePerspective * cameraSpeed + itemZ * cameraSpeed * numberOfItems

    document.documentElement.style.setProperty("--viewportHeight", height)
  }


  return (

    <div className="scene3D-container">
      <div className="scene3D">

        {content && content.map((e, i) => {
          return (
            <div style={{transform: "translate3D(0, 0, " + ((itemZ * cameraSpeed * i) + zOffset) + "px)"}}>
              {e}
            </div>)
        })}

      </div>
    </div>

  )
}

export default Scroll3D

import React, { useEffect, useState } from 'react'

function Scroll3D({ content, zIndex, initialZ, offsetY }) {

  if (!initialZ) initialZ = "0"
  if (!offsetY) offsetY = "0"

  const [itemZ, setItemZ] = useState(0)
  const [cameraSpeed, setCameraSpeed] = useState(0)

  const canRender = itemZ && cameraSpeed

  useEffect(() => {
    setSceneHeight()

    window.onscroll = () => moveCamera()
    window.onresize = () => {
      moveCamera()
      setSceneHeight()
    }

    return () => {
      window.onscroll = null
      window.onresize = null
    }
  }, [])

  function moveCamera() {
    document.documentElement.style.setProperty("--cameraZ", window.pageYOffset)
  }

  function setSceneHeight() {
    const numberOfItems = content.length - 1

    const scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"))

    const c = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"))
    setCameraSpeed(c)

    const z = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"))
    setItemZ(z)

    const height = window.innerHeight + scenePerspective * cameraSpeed + z * c * numberOfItems

    document.documentElement.style.setProperty("--viewportHeight", height)
    console.log(window.screen.height)

    // screen ratio because the oww corridor doesn't scale nicely 
    const ratio = window.screen.width / window.screen.height
    const originY = (-1.9748 * Math.pow(ratio, 2)) + (ratio * 0.4244) + 46.0504
    document.documentElement.style.setProperty("--scenePerspectiveOriginY", originY)
  }

// " + yOffset ? yOffset : "0" + ", "

  return (
    <div className="viewport" style={{zIndex: zIndex}}>
      { canRender &&
        <div className="scene3D__container" style={{zIndex: zIndex}}>
          <div className="scene3D">

            {content && content.map((e, i) => {
              return (
                <div
                  key={i}
                  style={
                    { transform: "translate3D(0, " + offsetY + ", " + ((itemZ * cameraSpeed * i) + (i == 0 ? initialZ : 0)) + "px)" }
                  }>
                  {e}
                </div>)
            })}

          </div>
        </div>
      }
    </div>
  )
}

export default Scroll3D

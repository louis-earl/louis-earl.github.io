import React from 'react'
import ConditionalWrapper from './ConditionalWrapper'

function IconLabel({ image, label, link }) {
  return (
    <ConditionalWrapper
      condition={link}
      wrapper={children => <a href={link}>{children}</a>}
    >
      <div className="contact__method">
        <img
          className="contact__method--icon"
          src={"./images/" + image + ".png"}
          alt={"Icon for " + image}
        />
        <p>{label}</p>
      </div>
    </ConditionalWrapper>
  )
}

export default IconLabel

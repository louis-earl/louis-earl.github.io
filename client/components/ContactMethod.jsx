
import React from 'react'

function ContactMethod({ image, label }) {
  return (
    <div className="contact__method">
      <img
        className="contact__method--icon"
        src={"./images/" + image + ".png"}
        alt={"Icon for " + image}
      />
      <p>{label}</p>
    </div>
  )
}

export default ContactMethod

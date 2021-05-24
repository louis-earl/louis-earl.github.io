import React from 'react'
import ContactMethod from './ContactMethod'

function Contact() {
  return (
    <div className="contact section">
      <h3>Don't Be a Stranger</h3>
      <div className="contact__methods">
        <ContactMethod image="email" label="louis.earl.14@gmail.com" />
        <ContactMethod image="linkedin" label="Linkedin" />
        <ContactMethod image="github" label="GitHub" />
        <ContactMethod image="phone" label="Available on Request" />
      </div>

    </div>
  )
}

export default Contact

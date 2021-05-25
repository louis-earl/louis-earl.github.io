import React from 'react'
import ContactMethod from './ContactMethod'

function Modal({ title, message }) {
  return (
    <div className="modal__wrapper">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal__button">
          <ContactMethod image={"icon-home"} label={"Home Page"} link={"/"} />
        </div>
      </div>
    </div>
  )
}

export default Modal

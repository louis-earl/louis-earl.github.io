import React from 'react'
import IconLabel from './IconLabel'

function Modal({ title, message }) {
  return (
    <div className="modal__wrapper">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal__button">
          <IconLabel image={"icon-home"} label={"Home Page"} link={"/"} />
        </div>
      </div>
    </div>
  )
}

export default Modal

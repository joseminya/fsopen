import React from 'react'

const Notification = ({ message,typeMessage }) => {
    if (message === null) {
      return null
    }
    let tipo = "error";
    if(typeMessage) tipo = "sucess"
    return (
      <div className={tipo}>
        {message}
      </div>
    )
  }

export default Notification;
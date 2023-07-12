import React from 'react'

const Note = ({ note }) => {
  return(
    <div>
      <p>{note.content}</p>
    </div>
  );
}

export default Note
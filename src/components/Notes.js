import React from 'react'

const Notes = (props) => {

  return (
    <div>
      {props.notes && props.notes.map(note =>
        <li key={note.id}>{note.content} - {note.date}</li>
      )}
    </div>
  )

}

export default Notes

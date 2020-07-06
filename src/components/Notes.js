import React from 'react'
import {connect} from 'react-redux'
import {deleteNote} from '../actions/deleteNote'

const Notes = (props) => {

  const handleDelete = (note) => {
    props.deleteNote(note.id, note.tracker_id)
  }

  return (
    <div>
      {props.notes && props.notes.map(note =>
        <li key={note.id}>{note.content} - {note.date} <button onClick={() => handleDelete(note)}>Delete</button></li>
      )}
    </div>
  )

}

export default connect(null,{deleteNote})(Notes)

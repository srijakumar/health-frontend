import React from 'react'
import {connect} from 'react-redux'
import {deleteNote} from '../actions/deleteNote'
//import {editNote} from '../actions/editNote'


const Notes = (props) => {
  console.log("this is props in Notes.js", props)

  const handleDelete = (note) => {
    // debugger
    props.deleteNote(note.id, note.tracker_id)
  }

  // const handleEdit = (note) => {
  //   props.editNote(note.id, note.tracker_id)
  // }


  return (
    <div className="Notes">
      {props.notes && props.notes.map(note =>
        <li key={note.id}>{note.content} - {note.date} <button className="Button" onClick={() => handleDelete(note)}>Delete</button></li>
      )}
    </div>

  )

}

export default connect(null,{deleteNote})(Notes)
// export default connect(null,{deleteNote, editNote})(Notes)

//
// <button className="Button" onClick={() => handleEdit(note)}>Edit</button>

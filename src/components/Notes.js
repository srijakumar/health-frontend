import React from 'react'
import {connect} from 'react-redux'
import {deleteNote} from '../actions/deleteNote'
//import {updateCal} from '../actions/updateCal'

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Notes = (props) => {

  console.log("this is props in Notes.js", props)

  const handleDelete = (note) => {
    props.deleteNote(note.id, note.tracker_id)
  }

  // const handleEdit = (note) => {
  //   props.editNote(note.id, note.tracker_id)
  // }

    const updateEvents = (notes) => {
      let notesArray = []
      notes.map(noteEditted => {
        let note = {
            title: "X",
            start: new Date(noteEditted.date),
            end: new Date(noteEditted.date)
          }
          notesArray.push(note)
        })
        console.log("This is notesArray", notesArray)
        return notesArray
      }

  return (
    <div className="Notes">
      {props.notes && props.notes.map(note =>
        <li key={note.id}>{note.content} - {note.date} <button className="Button" onClick={() => handleDelete(note)}>Delete</button></li>
      )}
      <div style={{height: '500px'}}>
        <Calendar
          selectable
          localizer={localizer}
          events={updateEvents(props.notes)}
          defaultDate={moment().toDate()}
         />
      </div>
    </div>

  )

}

export default connect(null,{deleteNote})(Notes)
// export default connect(null,{deleteNote, editNote})(Notes)

//
// <button className="Button" onClick={() => handleEdit(note)}>Edit</button>

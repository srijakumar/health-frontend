// NODE MODULES
import React from 'react'
import {connect} from 'react-redux'

// INTERNAL MODULES
import {deleteNote} from '../actions/deleteNote'

// EXTERNAL MODULES
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Notes = (props) => {
  console.log("this is props in Notes.js", props)

  const handleDelete = (note) => {
    props.deleteNote(note.id, note.tracker_id)
  }

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
      {props.notes && props.notes.map(note => {
        const handleClick = () => handleDelete(note);
        return <li key={note.id}>{note.content} - {note.date}
          <button className="Button" onClick={handleClick}>Delete</button>
        </li>
      })}
      <br/>

      <div style={{height: '500px'}}>
        <Calendar
          selectable
          localizer={localizer}
          events={updateEvents(props.notes)}
          defaultDate={moment().toDate()}
         />
      </div>
    </div>
  )}

export default connect(null,{deleteNote})(Notes)

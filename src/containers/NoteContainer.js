import React from 'react'
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {fetchTrackers} from '../actions/fetchTrackers'

const localizer = momentLocalizer(moment);

class NoteContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        calendar_notes: []
      }
    }

    componentDidMount() {

       let notesArray = []

      // loop through the notes and add to array
            this.props.tracker.notes.map(noteEditted => {

                let note = {
                    title: "X",
                    start: new Date(noteEditted.date),
                    end: new Date(noteEditted.date)
                }
                notesArray.push(note)
            })
            // after the looping is done, then just set the calendar array to the new one
            this.setState({
              calendar_notes: notesArray
             })
      }

      BigCalendar = () => (
        <div style={{height: '500px'}}>
         <Calendar
           selectable
           localizer={localizer}
           events={this.state.calendar_notes}
           defaultDate={moment().toDate()}
          />
        </div>
   )


  render() {
    return (
      <div>
        <NoteInput tracker={this.props.tracker}/> <br/>
        <Notes notes={this.props.tracker && this.props.tracker.notes}/>
        <div className = "app-side-bar">
          { this.state.calendar_notes ?
          <this.BigCalendar />
         : null
        }
        </div>
      </div>
    )
  }


}

export default NoteContainer

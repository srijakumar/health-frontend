import React from 'react'
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class NoteContainer extends React.Component {

  constructor() {
      super();
      const now = new Date();

      this.state = {
        calendar_notes: []
      }
    }

    eventsFunc = (props) => {
      let events = this.props.tracker.notes
        for (let i = 0; i < events.length; i++) {
            events[i].content = "X"
            events[i].date = moment.utc(events[i].date).toDate();
            events["start"] = events[i].date
            events["end"] = events[i].date
          }
        this.setState({
          calendar_notes: events
        })
    }

//I set the start and end date as the this.props.tracker.notes.date because i am not allowing my app to end an end date

  render(){

    const { calendar_notes } = this.state

    return (

      <div>
        <NoteInput tracker={this.props.tracker}/> <br/>
        <Notes notes={this.props.tracker && this.props.tracker.notes}/>
        <div className = "app-side-bar">
          <Calendar
            events={calendar_notes}
            defaultView='month'
            defaultDate={new Date()}
          />
        </div>
      </div>
    )
  }


}

export default NoteContainer

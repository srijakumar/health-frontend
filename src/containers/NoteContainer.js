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
    }


  render(){
    // debugger
    return (

      <div>
        <NoteInput tracker={this.props.tracker}/> <br/>
        <Notes notes={this.props.tracker && this.props.tracker.notes}/>
        <div className = "app-side-bar">
          <Calendar
            events={this.props.tracker.notes}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    )
  }


}

export default NoteContainer


//  const events = []
  // this.state = {
  //   name: 'React',
  //   events: this.props.tracker.notes
  // };
  // console.log("testing for events")
  // console.log(events)
  // events={this.state.events}
// [
//
//   {
//       id: 0,
//       title: 'X',
//       allDay: true,
//       start: new Date(2020, 7, 4),
//       end: new Date(2020, 7, 4),
//   },
//
//   {
//       id: 1,
//       title: 'X',
//       start: new Date(2020, 7, 3, 9, 0, 0),
//       end: new Date(2020, 7, 3, 10, 0, 0),
//   },
//
//   {
//       id: 2,
//       title: 'X',
//       start: new Date(2020, 7, 1),
//       end: new Date(2020, 7, 2),
//       desc: 'Test',
//   }
//
// ]

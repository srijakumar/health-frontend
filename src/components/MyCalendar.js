import React from 'react'
import {connect} from 'react-redux'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const BigCalendar = (props) => {
  console.log(props)

let notesArray = []
  const updateEvents = (notes) => {
    props.notes.map(noteEditted => {
      let note = {
          title: "X",
          start: new Date(noteEditted.date),
          end: new Date(noteEditted.date)
        }
        notesArray.push(note)
        console.log(notesArray)
      })
    }

    return (
      <div style={{height: '500px'}}>
        <Calendar
          selectable
          localizer={localizer}
          events={notesArray}
          defaultDate={moment().toDate()}
         />
      </div>
    )
}

export default connect(null,null)(BigCalendar)


// BigCalendar = () => (
//   <div style={{height: '500px'}}>
//    <Calendar
//      selectable
//      localizer={localizer}
//      events={this.state.calendar_notes}
//      defaultDate={moment().toDate()}
//     />
//   </div>
// )


// const handleDelete = (note) => {
//   props.deleteNote(note.id, note.tracker_id)
// }
//
//   componentDidMount() {
//      let notesArray = []
//           this.props.notes.map(noteEditted => {
//               let note = {
//                   title: "X",
//                   start: new Date(noteEditted.date),
//                   end: new Date(noteEditted.date)
//               }
//               notesArray.push(note)
//           })
//           this.setState({
//             calendar_notes: notesArray
//            })
//     }

//}






// import React from 'react'
// import { connect } from 'react-redux';
// // import NoteInput from '../components/NoteInput'
// import Notes from '../components/Notes'
// import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import {fetchTrackers} from '../actions/fetchTrackers'


// const localizer = momentLocalizer(moment);

// class NotesCalendar extends React.Component {
//
//   constructor(props) {
//     console.log(props)
//       super(props);
//       this.state = {
//         calendar_notes: []
//       }
//     }
//
//     componentDidMount() {
//        let notesArray = []
//             this.props.notes.map(noteEditted => {
//                 let note = {
//                     title: "X",
//                     start: new Date(noteEditted.date),
//                     end: new Date(noteEditted.date)
//                 }
//                 notesArray.push(note)
//             })
//             this.setState({
//               calendar_notes: notesArray
//              })
//       }

   //    BigCalendar = () => (
   //      <div style={{height: '500px'}}>
   //       <Calendar
   //         selectable
   //         localizer={localizer}
   //         events={this.state.calendar_notes}
   //         defaultDate={moment().toDate()}
   //        />
   //      </div>
   // )

//    render(){
//      return(
//        <div className = "app-side-bar">
//          { this.state.calendar_notes ?
//          <this.BigCalendar />
//         : null
//        }
//        </div>
//      )
//    }
// }

// export default NotesCalendar

import React from 'react'
import {connect} from 'react-redux'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {updateCal} from '../actions/updateCal'

const localizer = momentLocalizer(moment);

class BigCalendar extends React.Component {
  constructor(props) {
    console.log("This is props in mycalendar", props)
      super(props);
      this.state = {
        calendar_notes: []
      }
    }

    componentDidMount() {

        this.props.notes.map(noteEditted => {
                let note = {
                    title: "X",
                    start: new Date(noteEditted.date),
                    end: new Date(noteEditted.date)
                }
                this.state.calendar_notes.push(note)
            })
           }

          render(){
           return (
             <div style={{height: '500px'}}>
               <Calendar
                 selectable
                 localizer={localizer}
                 events={this.state.calendar_notes}
                 defaultDate={moment().toDate()}
                />
             </div>
           )}}

export default connect(null,{updateCal})(BigCalendar)


//This one works but doesnt update
// const BigCalendar = (props) => {
//   console.log("Props in bigcalendar", props)
//
// let notesArray = []
//   const updateEvents = (notes) => {
//     props.notes.map(noteEditted => {
//       let note = {
//           title: "X",
//           start: new Date(noteEditted.date),
//           end: new Date(noteEditted.date)
//         }
//         notesArray.push(note)
//         console.log("This is notesArray", notesArray)
//       })
//     }
//
//     return (
//       <div style={{height: '500px'}}>
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={notesArray}
//           defaultDate={moment().toDate()}
//          />
//       </div>
//     )
// }
//
// export default connect(null,null)(BigCalendar)

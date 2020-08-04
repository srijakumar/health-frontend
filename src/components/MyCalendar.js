// import React from 'react'
// import {connect} from 'react-redux'
// import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import {updateCal} from '../actions/updateCal'
//
// const localizer = momentLocalizer(moment);
//
// class BigCalendar extends React.Component {
//   // constructor(props) {
//   //   console.log("This is props in mycalendar", props)
//   //     super(props);
//   //     this.state = {
//   //       calendar_notes: []
//   //     }
//   //   }
//
//     // state = {
//     //   calendar_notes: []
//     // }
//     //
//     // createArray = (props) => {
//     //     this.props.notes.map(noteEditted => {
//     //       debugger
//     //       console.log("This is noteeditted", noteEditted)
//     //             let note = {
//     //                 title: "X",
//     //                 start: new Date(noteEditted.date),
//     //                 end: new Date(noteEditted.date)
//     //             }
//     //             this.state.calendar_notes.push(note)
//     //             console.log("this is state.calendar_notes",this.state.calendar_notes)
//     //         })
//     //        }
//
//
//           render(){
//            return (
//              <div>
//
//              <div style={{height: '500px'}}>
//                <Calendar
//                  selectable
//                  localizer={localizer}
//                  events={this.props.events}
//
//                  defaultDate={moment().toDate()}
//                 />
//              </div>
//              </div>
//            )}}
//
// export default BigCalendar
// // export default connect(null,{updateCal})(BigCalendar)
//
//
// //This one works but doesnt update
// // const BigCalendar = (props) => {
// //   console.log("Props in bigcalendar", props)
// //
// // let notesArray = []
// //   const updateEvents = (notes) => {
// //     props.notes.map(noteEditted => {
// //       let note = {
// //           title: "X",
// //           start: new Date(noteEditted.date),
// //           end: new Date(noteEditted.date)
// //         }
// //         notesArray.push(note)
// //         console.log("This is notesArray", notesArray)
// //       })
// //     }
// //
// //     return (
// //       <div style={{height: '500px'}}>
// //         <Calendar
// //           selectable
// //           localizer={localizer}
// //           events={notesArray}
// //           defaultDate={moment().toDate()}
// //          />
// //       </div>
// //     )
// // }
// //
// // export default connect(null,null)(BigCalendar)

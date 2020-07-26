// import React from 'react'
// import {connect} from 'react-redux'
// import {editNote} from '../actions/editNote'
//
// class NoteEdit extends React.Component {
//
// state = {
//   name: '',
//   description: ''
// }
//
// handleChange = (event) => {
//   this.setState({
//     [event.target.name]: event.target.value
//   })
// }
//
// handleSubmit = (event) => {
//   event.preventDefault()
//   //console.log(this.props)
//
//
//   let tracker = {...this.state, id: this.props.tracker.id}
//   this.props.editTracker(tracker)
//   this.setState({
//     name: '',
//     description: ''
//   })
// }
//
//
// //fixed
//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Date:</label>
//           <input type ="datetime" name="date" value={this.state.date} onChange={this.handleChange} placeholder='yyyy-mm-dd'/><br/>
//           <label>Content:</label>
//           <input type ="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder='Note'/><br/>
//           <input type="submit"/>
//         </form>
//       </div>
//     )
//   }
// }
//
// //fix end
//
// TrackerEdit.defaultProps = {
//   trackers: {}
// }
//
//
// export default connect(null, {editTracker})(TrackerEdit)
//
//
//
//
//
// class NoteInput extends React.Component {
//
//   state = {
//     date: '',
//     content: ''
//   }
//
//   handleChange =(event) => {
//     this.setState({
//       [event.target.name]:event.target.value
//     })
//   }
//
//   handleSubmit = (event) => {
//     event.preventDefault()
//      //debugger
//     this.props.addNote(this.state, this.props.tracker.id)
//     //gave an error with tracker . id
//     this.setState({
//       date: '',
//       content: ''
//     })
//   }
//
//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Date:</label>
//           <input type ="datetime" name="date" value={this.state.date} onChange={this.handleChange} placeholder='yyyy-mm-dd'/><br/>
//           <label>Content:</label>
//           <input type ="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder='Note'/><br/>
//           <input type="submit"/>
//         </form>
//       </div>
//     )
//   }
// }
//
// export default connect(null, {addNote})(NoteInput)

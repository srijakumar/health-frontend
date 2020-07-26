import React from 'react'
//need to connect to the store so when we dispatch it updates the store
import {connect} from 'react-redux'
import {addNote} from '../actions/addNote'

class NoteInput extends React.Component {

  state = {
    date: '',
    content: ''
  }

  handleChange =(event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
     //debugger
    this.props.addNote(this.state, this.props.tracker.id)
    //gave an error with tracker . id
    this.setState({
      date: '',
      content: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Date:</label>
          <input type ="datetime" name="date" value={this.state.date} onChange={this.handleChange} placeholder='yyyy-mm-dd'/><br/>
          <label>Content:</label>
          <input type ="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder='Note'/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addNote})(NoteInput)

//name in form to match the key in the state

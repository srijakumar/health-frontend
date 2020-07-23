import React from 'react'
import {connect} from 'react-redux'
import {editTracker} from '../actions/editTracker'

class TrackerEdit extends React.Component {

state = {
  name: '',
  description: ''
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  //console.log(this.props)
  debugger
  
  let tracker = {...this.state, id: this.props.tracker.id}
  this.props.editTracker(tracker)
  this.setState({
    name: '',
    description: ''
  })
}

  render(){
    return(
    <div>
      <form onSubmit = {this.handleSubmit}>
      <label>Tracker Name</label>
        <input type ='text' placeholder='Enter tracker name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
        <label>Description</label>
        <input type ='text' placeholder='Enter description'value={this.state.description} name="description" onChange={this.handleChange}/><br/>
        <input type='submit'/>

      </form>
    </div>
  )
  }
}

TrackerEdit.defaultProps = {
  trackers: {}
}


export default connect(null, {editTracker})(TrackerEdit)

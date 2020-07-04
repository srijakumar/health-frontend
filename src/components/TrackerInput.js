import React from 'react'
import {connect} from 'react-redux'
import {addTracker} from '../actions/addTracker'

class TrackerInput extends React.Component {

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
  this.props.addTracker(this.state)
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


export default connect(null, {addTracker})(TrackerInput)

//addTracker in place of mapDispatchToProps
//doesnt need access to mapstatetoprops which tells you what is already there
//value needs to be added to make the form a controlled form
//[event.target.name] brackets understands its a key of the object

//container should render other components, pass them data and can also have other functions inside them


import React from 'react'
import {connect} from 'react-redux'
import {fetchTrackers} from '../actions/fetchTrackers'

import Trackers from '../components/Trackers'
import TrackerInput from '../components/TrackerInput'

class TrackerContainer extends React.Component {

  componentDidMount(){
    //debugger
    this.props.fetchTrackers()
    //need the this.props to connect the fetch call to a redux store
  }


  render(){
    return(
      <div>
        <TrackerInput/> <br/> <br/>
        <Trackers trackers={this.props.trackers}/>
      </div>
    )
  }
}

const mapStateToProps = state => {

  console.log(state)

  return {
    trackers: state.trackers
  }
}
//state from redux store

export default connect(mapStateToProps, {fetchTrackers})(TrackerContainer)

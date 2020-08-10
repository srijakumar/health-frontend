// NODE MODULES
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

// INTERNAL MODULES
import Tracker from '../components/Tracker'
import Trackers from '../components/Trackers'
import TrackerInput from '../components/TrackerInput'
import {fetchTrackers} from '../actions/fetchTrackers'
import Navbar from '../components/Navbar'


// EXTERNAL MODULES
import {Header} from '../components/Navbar'

class TrackerContainer extends React.Component {
    componentDidMount(){
      this.props.fetchTrackers()
    }

  render(){
    return(
      <div className = "App-collage">
      <Navbar/>
        <Switch>
          <Route path='/trackers/new' component={TrackerInput}/>
          <Route path='/trackers/:id' render={(routerProps)=> <Tracker {...routerProps} trackers={this.props.trackers}/>} />
          <br></br>
          <Route exact path='/trackers' render={(routerProps)=> <Trackers {...routerProps} trackers={this.props.trackers}/>} />
        </Switch>
        <br></br>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trackers: state.trackers
  }
}

export default connect(
  mapStateToProps,
  {fetchTrackers})
(TrackerContainer)

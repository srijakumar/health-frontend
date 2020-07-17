//container should render other components, pass them data and can also have other functions inside them


import React from 'react'
import {connect} from 'react-redux'
import {fetchTrackers} from '../actions/fetchTrackers'
import {Route, Switch} from 'react-router-dom'
import Tracker from '../components/Tracker'
import Trackers from '../components/Trackers'
import TrackerInput from '../components/TrackerInput'
import Navbar from '../components/Navbar'

class TrackerContainer extends React.Component {

  componentDidMount(){
    //debugger
    this.props.fetchTrackers()
    //need the this.props to connect the fetch call to a redux store
  }


  render(){
    return(
      <div>
      <Navbar/>
        <Switch>
          <Route path='/trackers/new' component={TrackerInput}/>
          <Route path='/trackers/:id' render={(routerProps)=> <Tracker {...routerProps} trackers={this.props.trackers}/>} />
          <Route exact path='/trackers' render={(routerProps)=> <Trackers {...routerProps} trackers={this.props.trackers}/>} />
        </Switch>
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
//route prop give access to params
//switch returns the first path match, exact returns all

export default connect(mapStateToProps, {fetchTrackers})(TrackerContainer)

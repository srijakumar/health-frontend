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
import {Header} from '../components/Navbar'

class TrackerContainer extends React.Component {
    componentDidMount(){
      this.props.fetchTrackers()
      console.log(
        "this is component did mount in tracker container",
         this.props.fetchTrackers())
    }

  render(){
    return(
      <div className="ui raised very padded text container segment">
      <Navbar/>
      <Switch>
        <Route path='/trackers/new' component={TrackerInput}/>
        <Route exact path='/trackers'render={(routerProps)=><Trackers {...routerProps} trackers={this.props.trackers}/>} />
        <Route path='/trackers/:id' render={(routerProps)=> <Tracker {...routerProps} trackers={this.props.trackers}/>} />
        <br></br>
      </Switch>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

const mapStateToProps = state => {
    console.log("this is inside of mPTS", state)
  return {
    ...state
    // trackers: state.trackers
  }

}


const mapDispatchToProps = (dispatch) => {
    console.log("this is inside of map dispatch to props", dispatch)
  return {
    fetchTrackers: () => dispatch(fetchTrackers())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TrackerContainer)

//
// this.props.state.trackers

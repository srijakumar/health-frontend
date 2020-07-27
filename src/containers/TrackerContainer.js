//container should render other components, pass them data and can also have other functions inside them


import React from 'react'
import {connect} from 'react-redux'
import {fetchTrackers} from '../actions/fetchTrackers'
import {Route, Switch} from 'react-router-dom'
import Tracker from '../components/Tracker'
import Trackers from '../components/Trackers'
import TrackerInput from '../components/TrackerInput'
import Navbar from '../components/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class TrackerContainer extends React.Component {

  constructor() {
      super();
      const now = new Date();
      const events = [
        {
            id: 0,
            title: 'X',
            allDay: true,
            start: new Date(2020, 7, 4),
            end: new Date(2020, 7, 4),
        },

        {
            id: 1,
            title: 'X',
            start: new Date(2020, 7, 3, 9, 0, 0),
            end: new Date(2020, 7, 3, 10, 0, 0),
        },

        {
            id: 2,
            title: 'X',
            start: new Date(2020, 7, 1),
            end: new Date(2020, 7, 2),
            desc: 'Test',
        }

      ]
      this.state = {
        name: 'React',
        events
      };
    }

    componentDidMount(){
      //debugger
      this.props.fetchTrackers()
      //need the this.props to connect the fetch call to a redux store
    }





  render(){
    return(
      <div className = "App-collage">
      <Navbar/>
        <Switch>
          <Route path='/trackers/new' component={TrackerInput}/>
          <Route path='/trackers/:id' render={(routerProps)=> <Tracker {...routerProps} trackers={this.props.trackers}/>} />
          <Route exact path='/trackers' render={(routerProps)=> <Trackers {...routerProps} trackers={this.props.trackers}/>} />
        </Switch>

        <div style={{ height: '500pt'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trackers: state.trackers
  }
}
//state from redux store
//route prop give access to params
//switch returns the first path match, exact returns all

export default connect(mapStateToProps, {fetchTrackers})(TrackerContainer)

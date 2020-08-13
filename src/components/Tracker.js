// NODE MODULES
import React from 'react'
import {Redirect} from 'react-router-dom'

// INTERNAL MODULES
import NoteContainer from '../containers/NoteContainer'
import TrackerEdit from './TrackerEdit'
import PopularTracker from '../components/mostPopularTracker'

// EXTERNAL MODULES
import { get } from "lodash";

const Tracker = (props) => {
  console.log("This is props in TRACKER.js", props)
  //debugger
 let tracker = props && props.trackers && props.trackers.filter(tracker => tracker.id == props.match.params.id)[0] || [] ;
  console.log("THIS IS TRACKER AFTER FILTER", tracker)

  return(
    <div>
      <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
        <center><h2>
          {tracker ? tracker.name : null} - {tracker ? tracker.description : null}
        </h2></center>
      </div>


      <center><NoteContainer tracker={tracker}/></center>
      <br/>
      <center><PopularTracker tracker={tracker}/></center>
        //Popular Tracker Display Here
      <br/>
      <center><h4>Edit Tracker Details</h4>
      <TrackerEdit tracker={tracker}/></center>
      </div>
  )}

export default Tracker

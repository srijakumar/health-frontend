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
  let tracker = props.trackers.filter(tracker => tracker.id == props.match.params.id)[0] || undefined ;
  console.log("we are in trcker.js", tracker)

  return(
    <div className="Tracker">
      <h2>
        {tracker ? tracker.name : null} - {tracker ? tracker.description : null}
      </h2>
        <NoteContainer tracker={tracker}/>
      <br/>
      <PopularTracker tracker={tracker}/>
        //Popular Tracker Display Here
      <br/>
      <h4>Edit Tracker Details</h4>
        <TrackerEdit tracker={tracker}/>
    </div>
  )}

export default Tracker

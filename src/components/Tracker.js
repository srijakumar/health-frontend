import React from 'react'
import {Redirect} from 'react-router-dom'
import NoteContainer from '../containers/NoteContainer'
import TrackerEdit from './TrackerEdit'

const Tracker = (props) => {

  let tracker = props.trackers.filter(tracker => tracker.id == props.match.params.id)[0] || undefined;

  return(
    <div className="Tracker">
      <h2>
        {tracker ? tracker.name : null} - {tracker ? tracker.description : null}
      </h2>
      <NoteContainer tracker={tracker}/>
      <br/>
      <h4>Edit Tracker Details</h4>
      <TrackerEdit tracker={tracker}/>
    </div>
  )
}

export default Tracker

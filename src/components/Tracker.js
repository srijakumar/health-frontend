//show specific tracker information and includes notes
//function cz displaying and not updating state


import React from 'react'
import {Redirect} from 'react-router-dom'
import NoteContainer from '../containers/NoteContainer'
import TrackerEdit from './TrackerEdit'

const Tracker = (props) => {

  //let tracker = props.trackers[props.match.params.id - 1]
  //note if you delete it is possible some ids wont match
  //this works too but if manually you go to id 3 it wont exist and you will need to manually put id 8
  console.log('here')
  console.log(props)

  let tracker = props.trackers.filter(tracker => tracker.id == props.match.params.id)[0] || undefined;


  console.log('now here')
  console.log(tracker)

  return(
    <div>
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


  // This only works with links if you refresh your page you store resets and the props will be undefined the first time around

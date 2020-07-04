//show specific tracker information and includes notes
//function cz displaying and not updating state


import React from 'react'


const Tracker = (props) => {

let tracker = props.trackers[props.match.params.id - 1]

  return(
    <li>
      {tracker ? tracker.name : null} - {tracker ? tracker.description : null}
    </li>
  )


}

export default Tracker

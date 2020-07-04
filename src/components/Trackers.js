import React from 'react'
import Tracker from './Tracker'

const Trackers = (props) => {
console.log(props)


  return(
    <div>
      {props.trackers.map(tracker =>
        <div key={tracker.id}><Tracker tracker={tracker}/></div>)}
    </div>
  )


}

export default Trackers

//need props - thats the information being passed from container to child components

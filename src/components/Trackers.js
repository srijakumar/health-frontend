import React from 'react'
import Tracker from './Tracker'
import {Route, Link} from 'react-router-dom'

const Trackers = (props) => {
console.log(props)


  return(
    <div>
      {props.trackers.map(tracker =>
        <li key={tracker.id}>
          <Link to={`/trackers/${tracker.id}`}>{tracker.name}</Link>
        </li>)}
    </div>
  )


}

export default Trackers

//need props - thats the information being passed from container to child components

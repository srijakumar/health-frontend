import React from 'react'
import Tracker from './Tracker'
import {Route, Link} from 'react-router-dom'
import PopularTracker from '../components/mostPopularTracker'

const Trackers = (props) => {
  return(
    <div className="collage">
      {props.trackers.map(tracker =>
        <li key={tracker.id}>
          <Link to={`/trackers/${tracker.id}`}>{tracker.name}</Link>
        </li>)}
        <PopularTracker/>
    </div>
  )
}

export default Trackers

// NODE MODULES
import React from 'react'
import Tracker from './Tracker'
import {Route, Link} from 'react-router-dom'

const Trackers = (props) => {
    console.log("We are now in Trackers.js", this.props.trackers)
    return(
      <div className="collage">
        {props.trackers.map(tracker =>
          <li key={tracker.id}>
            <Link to={`/trackers/${tracker.id}`}>{tracker.name}</Link>
          </li>)}
      </div>
    )}
export default Trackers

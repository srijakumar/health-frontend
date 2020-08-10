import React from 'react'
import {mostPopularTracker} from '../actions/mostPopularTracker'

const PopularTracker = (props) => {

  const popularTracker = () => {
    props.mostPopularTracker()
  }

  return(
    <div className="Tracker">
      <button onClick={popularTracker}> See Your Most Successful Tracker </button>
    </div>
  )
}

export default PopularTracker

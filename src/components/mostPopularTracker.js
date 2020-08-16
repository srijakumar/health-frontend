// NODE MODULES
import React from 'react'
import { connect } from 'react-redux';

// INTERNAL MODULES
import {mostPopularTracker} from '../actions/mostPopularTracker'

const PopularTracker = (props) => {

  const displayFnc = () => {
    console.log("1", props)
    const showBestTracker = mostPopularTracker(props.tracker)
    console.log("2", showBestTracker)
  }


  console.log("PROPS IN POP TRACKER", props)
  return(
    <div>
      <p>This is the most popularTracker</p>
      <button className="Button" onClick={displayFnc}> See Your Most Successful Tracker </button>
    </div>
  )
}

export default connect(null,{mostPopularTracker})(PopularTracker)




// This works to show the payload name
// const PopularTracker = ({ mostPopularTracker, tracker }) => {
//   const popularTracker = () => {
//     const showBestTracker = mostPopularTracker(tracker)
//     return showBestTracker
//     console.log("This is the bestTracker", showBestTracker)
//
//   }
//   return(
//     <div className="Tracker">
//       <button className="Button" onClick={popularTracker}> See Your Most Successful Tracker </button>
//     </div>
//   )
// }
//
// export default connect(null,{mostPopularTracker})(PopularTracker)

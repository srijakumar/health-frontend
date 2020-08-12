// NODE MODULES
import React from 'react'
import { connect } from 'react-redux';

// INTERNAL MODULES
import {mostPopularTracker} from '../actions/mostPopularTracker'


const PopularTracker = ({ mostPopularTracker, tracker }) => {
  const popularTracker = () => {
    const bestTracker = mostPopularTracker(tracker)
    return bestTracker
    console.log("This is the bestTracker", bestTracker)

  }
  return(
    <div className="Tracker">
      <button className="Button" onClick={popularTracker}> See Your Most Successful Tracker </button>
    </div>
  )
}
export default connect(null,{mostPopularTracker})(PopularTracker)



// const popularTracker = (x) => {
//   const bestTracker = mostPopularTracker(x.tracker)
//   console.log("HI TEST", x.tracker)
//   return bestTracker
//   console.log("BEST TRACKER", bestTracker.name)
// }
//
// const PopularTracker = (props) => {
//   console.log("props in popular tracker", props)
//
//   return(
//     <div className="Tracker">
//       <button className="Button" onClick={popularTracker(props)}> See Your Most Successful Tracker </button>
//     </div>
//   )
// }
//
//
// export default connect(null,{mostPopularTracker})(PopularTracker)

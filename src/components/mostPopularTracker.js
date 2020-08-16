// NODE MODULES
import React from 'react'
import { connect } from 'react-redux';

// INTERNAL MODULES
import {mostPopularTracker} from '../actions/mostPopularTracker'
import Show from '../components/show'

const mapStateToProps = state => {
    console.log("this is inside of mPTS IN MOST POPULAR_TRACKER", state)
  return {
    ...state
  }
}

const PopularTracker = (props) => {

  // const displayFnc = () => {
  //   console.log("1", props)
  //   //let showBestTracker = {}
  //   let showBestTracker = props.mostPopularTracker(props.tracker)
  //   console.log("2", props.most_pop)
  //   return showBestTracker
  // }


  const displayPrm = () => {
    let showBestTracker = props.mostPopularTracker(props.tracker)
  }


  return(
    <div>
      <button className="Button" onClick={displayPrm}> See Your Overall Most Successful Tracker </button>
      <Show />
    </div>
  )
}

export default connect(mapStateToProps,{mostPopularTracker})(PopularTracker)

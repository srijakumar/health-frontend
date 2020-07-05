//import {FETCH_TRACKERS} from '../actions/fetchTrackers'

export default function trackerReducer(state = {trackers: []}, action){
//debugger
  switch (action.type) {
    case 'FETCH_TRACKERS':
      return {trackers: action.payload}
    case 'ADD_TRACKER':
      return {...state, trackers: [...state.trackers, action.payload]}
    case 'ADD_NOTE':
    let trackers = state.trackers.map(tracker => {
      if (tracker.id === action.paylod.id) {
        return tracker.payload
      } else {
        return tracker
      }
    })

    return {...state, trackers: trackers}

    default:
      return state
  }
}


  // return action.payload
//only one reducer since everything is donethrough the acc

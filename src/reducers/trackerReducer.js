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
    case 'DELETE_NOTE':
      let trackersDel = state.trackers.map(tracker => {
        if (tracker.id === action.paylod.id) {
          return tracker.payload
        } else {
          return tracker
        }
      })
      return {...state, trackers: trackersDel}
    case 'EDIT_TRACKER'
      let trackerEdit = state.trackers.map(tracker => {
        if (tracker.id === action.paylod.id) {
          return tracker.payload
        } else {
          return tracker
        }
      })
      return {...state, trackers: trackerEdit}
    default:
      return state
  }
}


  // return action.payload
//only one reducer since everything is donethrough the acc

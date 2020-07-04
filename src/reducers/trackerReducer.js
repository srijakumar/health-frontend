//import {FETCH_TRACKERS} from '../actions/fetchTrackers'

export default function trackerReducer(state = {trackers: []}, action){
//debugger
  switch (action.type) {
    case 'FETCH_TRACKERS':
      return {trackers: action.payload}
    case 'ADD_TRACKER':
      return {...state, trackers: [...state.trackers, action.payload]}
    default:
      return state
  }
}


  // return action.payload

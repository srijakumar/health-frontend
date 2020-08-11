export default function trackerReducer(state = {trackers: [], most_pop: []}, action){

  switch (action.type) {

    case 'FETCH_TRACKERS':
      return {trackers: action.payload}

    case 'UPDATE_CAL':
      return {...state, trackers: [...state.trackers, action.payload]}

    case 'ADD_TRACKER':
      return {...state, trackers: [...state.trackers, action.payload]}

    case 'ADD_NOTE':
      let trackers = state.trackers.map(tracker => {
        if (tracker.id === action.payload.id) {
          return action.payload
            } else {
          return tracker
          }})
      return {...state, trackers: trackers}

    case 'DELETE_NOTE':
      let trackersDel = state.trackers.map(tracker => {
        if (tracker.id === action.payload.id) {
          return action.payload
        } else {
          return tracker
        }})
      return {...state, trackers: trackersDel}

    case 'EDIT_NOTE':
      let trackersEdit = state.trackers.map(tracker => {
        if (tracker.id === action.payload.id) {
          return action.payload
        } else {
          return tracker
        }})
      return {...state, trackers: trackersEdit}

    case 'EDIT_TRACKER':
      let trackerE = state.trackers.map(tracker => {
        if (tracker.id === action.payload.id) {
          return action.payload
        } else {
          return tracker
        }})
      return {...state, trackers: trackerE}

    case 'POPULAR_TRACKER':
      console.log("Payload",action.payload.name)
      return {most_pop: action.payload}

    default:
      return state
  }
}


  // return action.payload
//only one reducer since everything is donethrough the acc

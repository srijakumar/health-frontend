

export default function trackerReducer(state = {trackers: []}, action){
//debugger
  switch (action.type) {
    case 'FETCH_TRACKERS':
      return {trackers: action.payload}
    default:
      return state
  }
}


  // return action.payload

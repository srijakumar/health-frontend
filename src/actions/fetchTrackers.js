
export function fetchTrackers() {

   // return action
  // we want a dispatch inside this
  // creates an action object

  return (dispatch) => { //thunk allows this to be sent
    fetch('http://localhost:3000/trackers')
    .then(response => response.json())
    .then(trackers => dispatch({ //dispatching to the reducer and reducer does based on the action
      type: 'FETCH_TRACKERS',
      paylod: trackers
    })
    ) //want to update the redux store instead of console.log
  }
  //dispatch()

}

//dispatch(actionObject)

//what we return/dispatch is the action object to reducer which will return a new version of the state

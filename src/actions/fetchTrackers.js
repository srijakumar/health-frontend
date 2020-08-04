
export function fetchTrackers() {

   // return action
  // we want a dispatch inside this
  // creates an action object
//thunk allows this to be sent
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trackers')
    .then(response => response.json())
    .then(trackers => dispatch({
      type: 'FETCH_TRACKERS',
      payload: trackers
    })
    )
  }
}

//dispatch(actionObject)

//what we return/dispatch is the action object to reducer which will return a new version of the state


//dispatching to the reducer and reducer does based on the action
//want to update the redux store instead of console.log
//dispatch()

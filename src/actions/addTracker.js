export const addTracker = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trackers', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'ADD_TRACKER', payload: tracker}))
  }

}

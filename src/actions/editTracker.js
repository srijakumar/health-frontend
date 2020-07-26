export const editTracker = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trackers/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'EDIT_TRACKER', payload: tracker}))
  }

}

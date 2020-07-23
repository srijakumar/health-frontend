
export const addNote = (note, trackerId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(tracker => {
          dispatch({type: 'ADD_NOTE', payload: tracker})
      }
    )
  }
}

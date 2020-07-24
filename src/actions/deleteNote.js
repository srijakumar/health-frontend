export const deleteNote = (noteId, trackerId) => {


  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/notes/${noteId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'DELETE_NOTE', payload: tracker}))
  }
}

//async so needs dispatch

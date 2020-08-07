export const editNote = (noteId, trackerId) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/notes/${noteId}`, {
      method: 'PATCH'
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'EDIT_NOTE', payload: tracker}))
  }
}

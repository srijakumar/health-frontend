export const updateCal = (notes, trackerId) => {

  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/notes`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'UPDATE_CAL', payload: tracker}))
  }
}

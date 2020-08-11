export const mostPopularTracker = (trackerId) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/most_notes`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'POPULAR_TRACKER', payload: tracker}))
  }
}


// export function mostPopularTracker(trackerId) {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/trackers/${trackerId}/most_notes`)
//     .then(response => response.json())
//     .then(tracker => dispatch({
//       type: 'POPULAR_TRACKER',
//       payload: tracker
//     })
//     )
//   }
// }

// export function fetchTrackers() {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/trackers`)
//     .then(response => response.json())
//     .then(trackers => dispatch({
//       type: 'FETCH_TRACKERS',
//       payload: trackers
//     })
//     )
//   }
// }


export const fetchTrackers = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/trackers`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(trackers => dispatch({type: 'FETCH_TRACKERS', payload: trackers}))
  }
}

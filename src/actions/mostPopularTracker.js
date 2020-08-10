export const mostPopularTracker = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trackers/${data.id}/most_notes`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'POPULAR_TRACKER', payload: tracker}))
  }

}


// export function fetchTrackers() {
//   return (dispatch) => {
//     fetch('http://localhost:3000/api/v1/trackers')
//     .then(response => response.json())
//     .then(trackers => dispatch({
//       type: 'FETCH_TRACKERS',
//       payload: trackers
//     })
//     )
//   }
// }

// export const mostPopularTracker = (tracker) => {
//     return dispatch => {
//     return fetch(`http://localhost:3000/api/v1/trackers/${tracker.id}/most_notes`, {
//       method: 'GET'
//     })
//     .then(response => response.json())
//     .then(tracker => dispatch({type: 'POPULAR_TRACKER', payload: tracker}))
//   }
// }

export const mostPopularTracker = (tracker) => {
    return async (dispatch) => {
    return await fetch(`http://localhost:3000/api/v1/trackers/${tracker.id}/most_notes`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'POPULAR_TRACKER', payload: tracker}))
  }
}


// 
// export function fetchSomeAlgos() {
//   return async (dispatch) => {
//   const response = await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
//   console.log("inside fetch some algos in actions index")
//   dispatch({ type: 'FETCH_SOME_ALGOS', payload: response.data })
//   }
// };



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

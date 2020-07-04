export const addTracker = (data) => {
  return (dispatch)=>{
    fetch('http://localhost:3000/api/v1/trackers', {
      headers: {
        'content-Type': 'application/json',
        'Accept':'application/json'
      },
      action: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(tracker => dispatch({type: 'ADD_TRACKER', payload: tracker}))
  }

}

//thunk lets you bring dispatch into this component

import React from 'react'

const Trackers = (props) => {
console.log(props)


  return (
    <div>
      {props.trackers.map(tracker =>
        <li key={tracker.id}>
        {tracker.name} - {tracker.description}</li>)}
    </div>
  )


}

export default Trackers

//need props - thats the information being passed from container to child components

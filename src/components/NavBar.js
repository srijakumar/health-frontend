import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/trackers' style={{paddingRight: '10px'}}>Trackers  </Link>
      <Link to='/trackers/new'> Add a new tracker</Link>
    </div>

  )
}

export default NavBar

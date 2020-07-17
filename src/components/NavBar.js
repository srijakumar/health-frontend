import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

// const NavBar = (props) => {
//
//   return (
//     <div>
//       <Link to='/trackers' style={{paddingRight: '10px'}}>Trackers  </Link>
//       <Link to='/trackers/new'> Add a new tracker</Link>
//     </div>
//
//   )
// }
//
// export default NavBar

const Header = (props) => {
  return(
    <div>
      <Navbar>
        <Navbar.Brand href="/home">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WnAQX7bRDndO78exTvMR2GLDZuB4v6E1xg&usqp=CAU"
               width="50"
               height="50"
               >
            </img>
            <h1>HabitFormer & Tracker</h1>
        </Navbar.Brand>
        <Navbar.Text>Let's build better habits together</Navbar.Text>
        <br></br>
        <br></br>
        <Link to='/trackers' style={{paddingRight: '10px'}}>Trackers  </Link>
        <Link to='/trackers/new'> Add a new tracker</Link>
      </Navbar>
    </div>
  )
}

export default Header

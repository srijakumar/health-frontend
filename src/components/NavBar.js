// NODE MODULES
import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

// INTERNAL MODULES
import AboutPage from './AboutPage'


const Header = (props) => {
  return(
    <div>
      <Navbar>
        <Navbar.Brand href="/home">
            <h1>HabitFormer & Tracker</h1>
        </Navbar.Brand>
        <Navbar.Text>Let's build better habits together</Navbar.Text>
        <br></br>
        <br></br>
        <Link to="/about" exact component={AboutPage}> About</Link>
        <Link to='/trackers' style={{paddingRight: '10px'}}>Trackers  </Link>
        <Link to='/trackers/new'> Add a new tracker</Link>

        <br></br>
      </Navbar>
    </div>
  )
}

export default Header

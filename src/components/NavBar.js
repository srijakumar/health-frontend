// NODE MODULES
import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

// INTERNAL MODULES
import AboutPage from './AboutPage'


const Header = (props) => {
  return(
    <div>
    <center>
      <Navbar>
        <Navbar.Brand href="/home">
            <h1>HabitFormer & Tracker</h1>
        </Navbar.Brand>
        <Navbar.Text>Let's build better habits together</Navbar.Text>
        <br></br>
        <br></br>
        <Link to='/about'exact component={AboutPage}>About</Link>
        <Link to='/trackers' style={{paddingRight: '10px'}}>All Trackers</Link>
        <Link to='/trackers/new'> New Tracker</Link>
        <br></br>
      </Navbar>
    </center>
    </div>
  )
}

export default Header

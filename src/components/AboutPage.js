// NODE MODULES
import React from 'react';
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return(
    <div>
      <center><h1>Health Tracker</h1></center>
        <center><strong><p>Let's build better habits together!</p></strong></center>
      <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
       <center><Link to="/about">About</Link> | <Link to="/trackers">All Trackers</Link> | <Link to="/trackers/new">New Tracker</Link></center>
     </div>


        {" "}
          <center><p>Create a tracker for the habit you want to track. Find the newly created tracker from the list and click on it. Document the days you worked towards that goal with a note, if you'd like. Make sure to enter the date in "yyyy-mm-dd" format. Watch your trend in the calendar associated with the tracker. Feel free to modify tracker names or delete the notes as per your needs. You can also click on the "Most Popular" button to see which habit you are working on the best! Enjoy!</p></center>
          <br/>

        
    </div>
  )
}

export default AboutPage;

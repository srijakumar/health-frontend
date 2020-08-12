// NODE MODULES
import React from 'react';
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return(
    <div>
    <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
      <center><h1>Guide</h1></center>
      </div>
        {" "}
        <center><p>Create a tracker for the habit you want to track. Find the newly created tracker from the list and click on it. Document the days you worked towards that goal with a note, if you'd like. Make sure to enter the date in "yyyy-mm-dd" format. Watch your trend in the calendar associated with the tracker. Feel free to modify tracker names or delete the notes as per your needs. You can also click on the "Most Popular" button to see which habit you are working on the best! Enjoy!</p></center>
        <br/>
    </div>
  )
}

export default AboutPage;

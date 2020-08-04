import React from 'react'
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'

import {fetchTrackers} from '../actions/fetchTrackers'
import {updateCal} from '../actions/updateCal'

class NoteContainer extends React.Component {
  render() {
    return (
      <div>
        <NoteInput tracker={this.props.tracker}/> <br/>
        <Notes notes={this.props.tracker && this.props.tracker.notes}/>
        <br/>

      </div>
    )
  }


}

export default NoteContainer

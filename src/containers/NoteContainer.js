import React from 'react'
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import { get } from "lodash";

import {fetchTrackers} from '../actions/fetchTrackers'

class NoteContainer extends React.Component {
  render() {
    const { tracker} = this.props;
    const notes = get(tracker, ["notes"], []);

    return (
      <div>
        <NoteInput tracker={tracker}/> <br/>
        <Notes notes={notes}/>
        <br/>
      </div>
    )
  }


}

export default NoteContainer

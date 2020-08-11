// NODE MODULES
import React from 'react'

// INTERNAL MODULES
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import {fetchTrackers} from '../actions/fetchTrackers'

// EXTERNAL MODULES
import { get } from "lodash";

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
    )}}

export default NoteContainer

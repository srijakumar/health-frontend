import React from 'react';
//need connect to give access to the store from App
import {connect} from 'react-redux'
import TrackerContainer from './containers/TrackerContainer'
import './App.css'


class App extends React.Component {

  render() {
    return(
      <div className="App">

          <div className="container">
            <article className="App-collage">
              <TrackerContainer/>
            </article>

          </div>
          <footer>
            <p>Created by Srija</p>
          </footer>
      </div>
    )
  }
}


export default App;

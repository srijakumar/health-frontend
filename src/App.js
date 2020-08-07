import React from 'react';
//need connect to give access to the store from App
import {connect} from 'react-redux'
import TrackerContainer from './containers/TrackerContainer'
import './App.css'


class App extends React.Component {

  render() {
    return(
      <div className="App">
        <header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WnAQX7bRDndO78exTvMR2GLDZuB4v6E1xg&usqp=CAU"
               className="App-logo" alt="logo" />
          </header>
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

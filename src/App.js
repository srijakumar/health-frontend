import React from 'react';
//need connect to give access to the store from App
import {connect} from 'react-redux'
//import {fetchTrackers} from './actions/fetchTrackers'
import TrackerContainer from './containers/TrackerContainer'
import './App.css'


class App extends React.Component {

  //componentDidMount() {
  //   this.props.fetchTrackers({type: 'FETCH_TRACKERS', payload: {name: 'Health'}})
  // }
   //this.props.trackers
  // this.props.fetchTrackers
//}

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

// const mapStateToProps = (state) => {
//   //way of accessing values in the store as props and need to pass it through the connect
//   return {
//     trackers: state.trackers
//   }
// }

// export default connect(null, {fetchTrackers})(App);

//myStore.dispatch({type: 'FETCH_TRACKERS', payload: {name: 'Health'}})

// //trying to see what's in the store. To add something to the store you add second argument - the action creator
// export default connect(mapStateToProps)(App);


// export default connect()(App);

export default App;

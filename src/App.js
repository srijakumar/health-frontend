import React from 'react';
//need connect to give access to the store from App
import {connect} from 'react-redux'
//import {fetchTrackers} from './actions/fetchTrackers'
import TrackerContainer from './containers/TrackerContainer'



class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchTrackers({type: 'FETCH_TRACKERS', payload: {name: 'Health'}})
  // }
  // this.props.trackers
  // this.props.fetchTrackers


  render(){
    return(
      <div className="App">
        <TrackerContainer/>
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


export default connect()(App);

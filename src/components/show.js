import React from 'react'
import { connect } from 'react-redux';


const Show = (props) => {
  console.log("This is props in SHOW", props)

 let showPop = props && props.most_pop;
 console.log("THIS IS SHOW MOST POP before return", showPop)
  return(
    <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
        <center><h2>
          {showPop ? showPop.name : null}
        </h2></center>
      </div>
    )}

const mapStateToProps = state => {
console.log("this is inside of mPTS SHOW", state)
  return {
    ...state
  }}

export default connect(mapStateToProps)(Show)

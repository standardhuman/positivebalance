import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ActivityList extends Component{
  render(){
    return(
      <ul>
        <li>{this.props.activities}</li>
        <li>two</li>
        <li>three</li>
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    activities: state.activities
  }
}

export default connect(mapStateToProps)(ActivityList);

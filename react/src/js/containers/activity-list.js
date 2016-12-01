import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ActivityList extends Component{
createActivityListItems(){
    return this.props.activities.map((activity) => {
      return (
        <li key={activity.name}>{activity.name}</li>
      )
    })
  }
  render(){
    return(
      <ul>
      {this.createActivityListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    activities: state.activities
  }
}

export default connect(mapStateToProps) (ActivityList);

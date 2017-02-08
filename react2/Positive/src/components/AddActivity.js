import React from 'react';


class AddActivity extends React.Component {
  render() {
    return (
      <div className="panel">
        <h2>Add Activity</h2>
        {/* input  create new & update old  */}
        {/*  two types of forms and a button, first form runs once and creates new activity. multiple forms for updating activity. */}
        <button onClick={this.props.loadActivities}>Load Sample Activities</button>
      </div>
    )
  }
}

export default AddActivity;

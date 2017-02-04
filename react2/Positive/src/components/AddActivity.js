import React from 'react';


class AddActivity extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Activity</h2>
        <button onClick={this.props.loadActivities}>Load Sample Activities</button>
      </div>
    )
  }
}

export default AddActivity;

import React from "react";
import ActivityCRUD from "./activitycrud";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ActivityCRUD />
        {this.props.children}
      </div>
    );
  }
}

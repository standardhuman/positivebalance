import React from "react";
import NewUpdateActivity from "./newupdateactivity"
// create state for each new activity

export default class UpdateActivitySection extends React.Component {

  render(){
    const model =  [];
    const updateState = this.props.updateState
    this.props.activities.forEach(function(activity){
        model.push(
          <NewUpdateActivity activity={activity} updateState={updateState} />
        )
      })
    return (
      <div>
        {model}
      </div>
    )
  }
}

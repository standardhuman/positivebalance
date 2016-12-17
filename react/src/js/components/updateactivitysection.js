import React from "react";
import NewUpdateActivity from "./newupdateactivity"
// create state for each new activity

export default class UpdateActivitySection extends React.Component {

  render(){
    const model =  [];
    const updateHowMany = this.props.updateHowMany
    this.props.activities.forEach(function(activity){
        model.push(
          <NewUpdateActivity activity={activity} updateHowMany={updateHowMany} />
        )
      })
    return (
      <div>
        {model}
      </div>
    )
  }
}

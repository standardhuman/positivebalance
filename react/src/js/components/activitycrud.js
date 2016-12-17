import React from "react";
import UpdateActivitySection from "./updateactivitysection";
import CreateActivity from "./createactivity";
// source of state
// has functionality to catch state updates in children
export default class ActivityCRUD extends React.Component {
  constructor(props) {
      super(props);
      this.state = {activities: []};
  }

  updateHowMany(val, actName){
    //logic for selecting the right spot in the activity array here
    for(var i = 0; i < this.state.activities.length; i++){
      if(this.state.activities[i].name === actName){
        let state = {}
        state[this.state.activities[i].howmanyunits = val]
        this.setState(state)
        return
      }else{
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/activities', {
  	method: 'get'
      }).then((response) => {
        response.json().then((message) => {
          this.setState({activities: message.data})
        })
      }).catch(function(err) {});
  }
  render() {
    console.log("this.state.activities", this.state.activities);
      if (this.state.activities.length > 0) {
        return (
          <div>
            <CreateActivity />
            <UpdateActivitySection activities={this.state.activities} updateHowMany={this.updateHowMany.bind(this)}/>
            </div>
        )
      } else {
        return (
          <div><p>"loading"</p></div>
        )
      }
    }
}

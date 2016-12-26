import React from "react";
import UpdateActivitySection from "./updateactivitysection";
import CreateActivity from "./createactivity";
import Summary from "./summary"
import NewUpdateActivity from "./newupdateactivity"

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

     let temparray = this.state.activities.slice()
     temparray[i].howmanyunits = val
     this.setState({activities: temparray})
        // let state = {}
        // state[this.state.activities[i].howmanyunits = val]
        // console.log("state", state)
        // this.setState(state)
        return
      }else{
      }
    }
  }

  createAndAddActivity(name, moreorless, qty, unit, weight){

    let newObject = {
      name: name,
      moreorless: moreorless,
      qty: qty,
      unit: unit,
      weight: weight,
      didido: "",
      howmanyunits: ""
    }
    let newArray  = this.state.activities.slice()
    newArray.push(newObject)
    this.setState({activities: newArray})

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
    let update = this.updateHowMany.bind(this);
      if (this.state.activities.length > 0) {
        return (
          <div>
            <CreateActivity createAndAddActivity={this.createAndAddActivity.bind(this)}/>

            {this.state.activities.map(function(val, index, col){
              return <NewUpdateActivity activity={val} updateHowMany={update} />
            })}

            {this.state.activities.map(function(val, index, col){
              return (<Summary activity={val} />)
            })}
            </div>
        )
      } else {
        return (
          <div><p>"loading"</p></div>
        )
      }
    }
}

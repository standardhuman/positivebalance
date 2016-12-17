import React from "react";
import UpdateActivitySection from "./updateactivitysection";

class CreateActivity extends React.component {

  createNew(){
    const name = this.refs.name.value;
    const moreorless = this.refs.moreorless.value;
    const qty = this.refs.qty.value;
    const unit = this.refs.unit.value;
    const weight = this.refs.weight.value;

    this.props.updateState(name, moreorless, qty, unit, weight)
  }

  render () {
    return (
      <div>
        <form onSubmit>
          <input ref="name" type="text" />
          <input ref="moreorless" type="text" />
          <input ref="qty" type="text" />
          <input ref="unit" type="text" />
          <input ref="weight" type="text" />
        </form>
      </div>
    )
  }
}


// source of state
// has functionality to catch state updates in children
export default class ActivityCRUD extends React.Component {
  constructor(props) {
      super(props);
      this.state = {activities: []};
  }

  updateState(val, actName){
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
            <UpdateActivitySection activities={this.state.activities} updateState={this.updateState.bind(this)}/>
            </div>
        )
      } else {
        return (
          <div><p>"loading"</p></div>
        )
      }
    }
}

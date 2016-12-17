import React from "react";

// render instance of new activity
export default class NewUpdateActivity extends React.Component{
  constructor(props){
    super(props)
  }
  update(){
    // console.log("Inside update");
    const theVal = this.refs.myInput.value;
    const actName = this.props.activity.name;
    this.props.updateState(theVal, actName)
  }
  render(){
    return (
      <div>
        <p>How many times did you {this.props.activity.name} {this.props.activity.quantity} {this.props.activity.unit} ?</p>
        <form>
          <input type="text" id="input1" ref="myInput"></input>
          <input type="button" onClick={this.update.bind(this)}></input>
        </form>
      </div>
    )
  }
}

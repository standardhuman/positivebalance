import React from "react";

// render instance of new activity
export default class NewUpdateActivity extends React.Component{
  constructor(props){
    super(props)
    this.state = {theVal: ""}
  }
  update(){
    // console.log("Inside update");
    const theVal = parseInt(this.state.theVal);
    const actName = this.props.activity.name;
    this.props.updateHowMany(theVal, actName)
  }
  onChange(e) {
    this.setState({theVal: e.target.value});
  }
  render(){
    return (
      <div>
        <p>How many times did you {this.props.activity.name} {this.props.activity.qty} {this.props.activity.unit} ?</p>
        <form>
          <input type="number" id="input1" ref="myInput" onChange={this.onChange.bind(this)}></input>
          <input type="button" onClick={this.update.bind(this)}></input>
        </form>
      </div>
    )
  }
}

import React from "react";


export default class CreateActivity extends React.Component {
  constructor(props) {
      super(props);
      this.state = {nameVal: ""};
  }

  createNew(){
    const name = this.refs.name.value;
    const moreorless = this.refs.moreorless.value;
    const qty = parseInt(this.refs.qty.value);
    const unit = this.refs.unit.value;
    const weight = parseInt(this.refs.weight.value);

    console.log(name);
    console.log(moreorless);

    this.props.createAndAddActivity(name, moreorless, qty, unit, weight)
  }

  formfiller(){
    this.setState({nameVal: this.refs.name.value})
  }

  render () {
    return (
      <div>
        <form>
          <p>I would like to </p>
          <input ref="name" type="text" onBlur={this.formfiller.bind(this)}/>
          <p>more or less?</p>
          <input ref="moreorless" type="text" />
          <p>When I do {this.state.nameVal}, the minimum I would do is: </p>
          <p>Number:</p>
          <input ref="qty" type="text" />
          <p>Unit name:</p>
          <input ref="unit" type="text" />
          <p>How important is it that you {this.state.nameVal}?</p>
          <input ref="weight" type="text" />
          <button type="button" onClick={this.createNew.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

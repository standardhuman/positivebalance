import React from "react";


export default class CreateActivity extends React.Component {

  createNew(){
    const name = this.refs.name.value;
    const moreorless = this.refs.moreorless.value;
    const qty = this.refs.qty.value;
    const unit = this.refs.unit.value;
    const weight = this.refs.weight.value;

    console.log(name);

    this.props.updateState(name, moreorless, qty, unit, weight)
  }

  render () {
    return (
      <div>
        <form>
          <input ref="name" type="text" />
          <input ref="moreorless" type="text" />
          <input ref="qty" type="text" />
          <input ref="unit" type="text" />
          <input ref="weight" type="text" />
          <button type="button" onClick={this.createNew.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

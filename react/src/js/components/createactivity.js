import React from "react";


export default class CreateActivity extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nameVal: "",
        moreorless: "",
        unit: "",
        selectedOption: ""
    };
  }

  createNew(){
    const name = this.refs.name.value;
    const moreorless = parseInt(this.state.moreorless);
    const qty = parseInt(this.refs.qty.value);
    const unit = this.refs.unit.value;
    const weight = parseInt(this.refs.weight.value);

    this.props.createAndAddActivity(name, moreorless, qty, unit, weight)
  }

  formfiller(){
    this.setState({nameVal: this.refs.name.value})
  }

  setUnit(event){
    this.setState({unit: event.target.value})
  }

  handleOptionChange(changeEvent) {
    if(changeEvent.target.value === "more"){
      this.setState({moreorless: "1"})
    }else{
      this.setState({moreorless: "-1"})
    }

    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  render () {
    return (
      <div>
        <form>
          <p>I would like to{" "}

            <input ref="name" type="text" onBlur={this.formfiller.bind(this)} placeholder="activity name"/>{" "}

            <label>
                more{" "}
                <input ref="moreorless" name="moreorless" type="radio" value="more" checked={this.state.selectedOption === "more"} onChange={this.handleOptionChange.bind(this)} />{" "}
            </label>
            <label>
              or less{" "}
              <input ref="moreorless" name="moreorless" type="radio" value="less" checked={this.state.selectedOption === "less"} onChange={this.handleOptionChange.bind(this)} />?
            </label>
          </p>
        </form>

        <form>
          <p>The least I would ever {this.state.nameVal} in one go is{" "}
            <input ref="qty" type="text" placeholder="1,2,3..."/>{" "}
            <input ref="unit" type="text" onChange={this.setUnit.bind(this)} placeholder="miles, squats, etc..." />.
          </p>
        </form>


        <form>
          <p>With 10 being the most important, how important is it that I {this.state.nameVal}{" "} {this.state.selectedOption}?
          <input ref="weight" type="text" placeholder="1 - 10" /> </p>
          <button type="button" onClick={this.createNew.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

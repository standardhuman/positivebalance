import React from "react";


export default class CreateActivity extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nameVal: "",
        moreorless: "",
        unit: "",
        moreOrLessConverted: ""
    };
  }

  createNew(){
    const name = this.refs.name.value;
    const moreorless = parseInt(this.state.moreorless);
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

  setMoreOrLess(event){
    this.setState({moreorless: event.target.value})
    console.log("event.target.value:", event.target.value);
    console.log("this.state.moreorless", this.state.moreorless);
    this.moreOrLessConverter()
  }

  setUnit(event){
    this.setState({unit: event.target.value})
  }

  moreOrLessConverter(){
    if(this.state.selectedOption === "more"){
      this.setState({moreOrLessConverted: "1"})
      console.log("this.state.moreOrLessConverted", this.state.moreOrLessConverted);
    }else{
      this.setState({moreOrLessConverted: "-1"})
      console.log("else");
    }
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  render () {
    return (
      <div>
        <form>
          <p>I would like to </p>
          <input ref="name" type="text" onBlur={this.formfiller.bind(this)} />
          <p>more
          <input ref="moreorless" name="moreorless" type="radio" value= "more" checked={this.state.selectedOption === 'more'} onChange={this.handleOptionChange.bind(this)} />
          or less
          <input ref="moreorless" name="moreorless" type="radio" value= "less" checked={this.state.selectedOption === "less"} onChange={this.handleOptionChange.bind(this)} />?</p>
          <p>Unit name:</p>
          <input ref="unit" type="text" onChange={this.setUnit.bind(this)}/>
          <p>The minimum number of {this.state.unit} I would {this.state.nameVal} is: </p>
          <input ref="qty" type="text" />
          <p>How important is it that you {this.state.nameVal} {this.state.selectedOption}?</p>
          <input ref="weight" type="text" />
          <button type="button" onClick={this.createNew.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

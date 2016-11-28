import React from 'react';
import ReactDOM from 'react-dom';

class NewUpdateActivity extends React.Component{
  constructor(props) {
    super(props)
  }
  update(){
    const theVal = this.refs.myInput.value
    this.props.updateState(theVal)
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

class UpdateActivitySection extends React.Component {
  render(){
    const model =  [];
    const updateState = this.props.updateState
    console.log("state:", this.state);
    console.log("props:", this.props);
    this.props.activities.forEach(function(activity){
        model.push(
          <NewUpdateActivity activity={activity} updateState={updateState} />
        )
      })
    return (
      <div>
        {model}
      </div>
    )
  }
}

class PositiveBalance extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        activities: [
          {
              name: 'run',
              moreorless: 1,
              quantity: 1,
              unit: 'mile',
              weight: 5,
              didido: 1,
              howmanyunits: 0
          }, {
              name: 'drink',
              moreorless: -1,
              quantity: 1,
              unit: 'drinks',
              weight: 6,
              didido: 1,
              howmanyunits: 0
          }
      ]};
  }
  updateState(val){
    this.setState({data: val})
    console.log(this.state.data)
  }
    render() {
      console.log("this.state.activities:", this.state.activities);
        return (
            <div>
                <UpdateActivitySection activities={this.state.activities} updateState={this.updateState.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <PositiveBalance />, document.getElementById('app'));

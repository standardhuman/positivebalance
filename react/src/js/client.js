import React from 'react';
import ReactDOM from 'react-dom';

// render instance of new activity
class NewUpdateActivity extends React.Component{
  constructor(props) {
    super(props);
  }
  update(){
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

// create state for each new activity
class UpdateActivitySection extends React.Component {
  render(){
    const model =  [];
    const updateState = this.props.updateState
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
      this.state = {activities: []};
    //   this.state = {
    //     activities: [
    //       {
    //           name: 'run',
    //           moreorless: 1,
    //           quantity: 1,
    //           unit: 'mile',
    //           weight: 5,
    //           didido: 1,
    //           howmanyunits: 0
    //       }, {
    //           name: 'drink',
    //           moreorless: -1,
    //           quantity: 1,
    //           unit: 'drinks',
    //           weight: 6,
    //           didido: 1,
    //           howmanyunits: 0
    //       }
    //    ]
    //  }
  }

  updateState(val, actName){
    //logic for selecting the right spot in the activity array here
    console.log(val, actName)
    let state = {};
    state[this.state.activities[0].howmanyunits = val]
    this.setState(state)
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/activities', {
  	method: 'get'
  }).then((response) => {
    response.json().then((message) => {
      this.setState({activities: message.data})
    })
  }).catch(function(err) {
  	// Error :(
  });
  }
    render() {
      console.log("this.state.activities", this.state.activities);
      if (this.state.activities.length > 0) {
        return (

            <div>
                <UpdateActivitySection activities={this.state.activities} updateState={this.updateState.bind(this)}/>
                {/* "Hello" */}
                {/* {this.state.activities[1].name} */}
            </div>
        )
      }
      else {
        return (
          <div><p>"loading"</p></div>
        )
      }
    }
}


ReactDOM.render(
    <PositiveBalance />,
  document.getElementById('app'));

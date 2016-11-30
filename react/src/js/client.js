import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'
import ActivityList from './containers/activity-list'

const store = createStore(allReducers);

// render instance of new activity
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

// create state for each new activity
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

class Comment extends React.Component {
  render() {
    function edit(){
      alert("You changed it)")
    }
    function remove(){
      alert("Now you've done it :()")
    }
    return(
      <div className="commentContainer">
        <div className="commentText">All existing activities</div>
        <button onClick={this.edit} className="button-primary">Update</button>
        <button onClick={this.remove} className="button-danger">Remove</button>
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
       ]
     }
  }

  updateState(val){
    this.setState({data: val})
  }

  render() {
        return (
            <div>
              <ActivityList />
              <Comment className="board">Hey now</Comment>
            </div>
        )
    }
}

ReactDOM.render(
  <Provider store={store}>
    <PositiveBalance />
  </Provider>,
  document.getElementById('app'));

export default PositiveBalance
{/* <UpdateActivitySection activities={this.state.activities} updateState={this.updateState.bind(this)}/> */}

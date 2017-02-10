import React from 'react';
import Summary from './Summary'
// import AddActivity from './AddActivity'
import sampleActivities from '../sampleActivities'
import Header from './Header'
import Activity from './Activity'

class App extends React.Component {
  constructor (){
    super ()
    this.state = {
      activities: {},
      summary: {}
    }
    this.loadActivities = this.loadActivities.bind(this)
    this.addToSummary = this.addToSummary.bind(this)
    this.updateActivity = this.updateActivity.bind(this)
  }

  loadActivities() {
    this.setState({
      activities: sampleActivities
    })
  }

  addToSummary(howManyTimes, key) {
    const summary = {...this.state.summary}
    summary[key] = parseInt(howManyTimes, 10)
    this.setState({
        summary: summary
      })
      console.log("this.state", this.state);
  }

  updateActivity(key, updatedActivity){
    const activities = {...this.state.activities}
    activities[key] = updatedActivity
    this.setState({
      activities
    })
  }

  render() {
    return (
      <div className='positive-balance'>
        <div className="activity-list panel">
          <Header tagline="How was your day?" />
          {/* <h2>Add Activity</h2> */}
          {/* input  create new & update old  */}
          {/*  two types of forms and a button, first form runs once and creates new activity. multiple forms for updating activity. */}
          <button onClick={this.loadActivities}>Load Sample Activities</button>
          <ul className="list-of-activities">
          {Object
            .keys(this.state.activities)
            .map(key => <Activity key={key} index={key} details={this.state.activities[key]}  addToSummary={this.addToSummary} updateActivity={this.updateActivity}/>)
          }
          </ul>
        </div>
            <Summary activities={this.state.activities} summary={this.state.summary}/>
            {/* <AddActivity loadActivities={this.loadActivities} /> */}
      </div>
    );
  }
}

export default App;

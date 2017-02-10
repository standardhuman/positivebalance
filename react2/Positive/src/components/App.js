import React from 'react';
import Summary from './Summary'
import AddActivity from './AddActivity'
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
    this.addActivity = this.addActivity.bind(this)
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

  addActivity(activity) {
    const activities = {...this.state.activities}
    const timeStamp = Date.now()
    activities[`act${timeStamp}`] = activity
    this.setState({
      activities
    })
  }

  render() {
    return (
      <div className='positive-balance'>
        <div className="activity-list panel">
          <Header tagline="How was your day?" />
          <AddActivity addActivity={this.addActivity} />
          <button onClick={this.loadActivities}>Load Sample Activities</button>
          <ul className="list-of-activities">
          {Object
            .keys(this.state.activities)
            .map(key => <Activity key={key} index={key} details={this.state.activities[key]}  addToSummary={this.addToSummary} updateActivity={this.updateActivity}/>)
          }
          </ul>
        </div>
            <Summary activities={this.state.activities} summary={this.state.summary}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Summary from './Summary'
import AddActivity from './AddActivity'
import sampleActivities from '../sampleActivities'
import Header from './Header'
import Activity from './Activity'
import base from '../base'

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
    this.handleSummary = this.handleSummary.bind(this)
    this.removeActivity = this.removeActivity.bind(this)
    this.removeSummaryId = this.removeSummaryId.bind(this)
    this.clearActivities = this.clearActivities.bind(this)
  }

  handleSummary() {
    const localStorageRef = localStorage.getItem('summary')
    if (localStorageRef) {
      this.setState({
        summary: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillMount() {
        this.ref = base.syncState('/activities'
        , {
          context: this,
          state: 'activities'
        });
      this.handleSummary();
  }

  componentWillUnMount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('summary', JSON.stringify(nextState.summary))
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

  removeActivity(key) {
    const activities = {...this.state.activities};
    const summary = {...this.state.summary};
    activities[key] = null;
    delete summary[key]
    this.setState({
      activities: activities,
      summary: summary
    })
  }

  removeSummaryId(key) {
    const summary = {...this.state.summary};
    delete summary[key];
    this.setState({
      summary: summary
    })
  }

  clearActivities() {
    const activities = {...this.state.activities};
    const summary = {...this.state.summary};
    Object.keys(activities).forEach((key) => {
      activities[key] = null
    })
    Object.keys(summary).forEach((key) => {
      delete summary[key]
    })
    this.setState({
      activities: activities,
      summary: summary
    })
  }

  render() {
    return (
      <div className='positive-balance'>
        <div className="activity-list panel">
          <Header tagline="How was your day?" />
          <Summary activities={this.state.activities} summary={this.state.summary} removeSummaryId={this.removeSummaryId}/>
          <button className="loadSamples" onClick={this.loadActivities}>Load Sample Activities</button>
          <button className="clearActivities" onClick={this.clearActivities}>Clear Activities</button>
          <AddActivity addActivity={this.addActivity} />
          <div className="list-of-activities">
          {Object
            .keys(this.state.activities)
            .map(key => <Activity key={key} index={key} details={this.state.activities[key]} addToSummary={this.addToSummary} updateActivity={this.updateActivity} removeActivity={this.removeActivity}/>)
          }
        </div>
        </div>
      </div>
    );
  }
}

export default App;

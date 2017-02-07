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
  }

  loadActivities() {
    this.setState({
      activities: sampleActivities
    })
  }

  addToSummary(howManyTimes, key) {
    const summary = {...this.state.summary}
    console.log("howmanytimes", howManyTimes);
    console.log("key", key);
    summary[key] = howManyTimes
    this.setState({
        summary: summary
      })
      console.log("summary", this.state.summary);
  }

  render() {
    return (
      <div className='positive-balance'>
        <div className="activity-list">
          <Header tagline="How was your day?" />
          <ul className="list-of-activities">
          {Object
            .keys(this.state.activities)
            .map(key => <Activity key={key} index={key} details={this.state.activities[key]}  addToSummary={this.addToSummary} />)
          }
          </ul>
          <p>{this.state.summary.act1}</p>
        </div>
          <Summary />
          <AddActivity loadActivities={this.loadActivities} />
      </div>
    );
  }
}

export default App;

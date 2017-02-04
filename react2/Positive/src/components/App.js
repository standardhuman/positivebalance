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
  }

  loadActivities (){
    this.setState({
      activities: sampleActivities
    })
  }

  render() {
    return (
      <div className='positive-balance'>
        <div className="activity-list">
          <Header tagline="How was your day?" />
          <ul className="list-of-activities">
          {
            Object
            .keys(this.state.activities)
            .map(key => <Activity key={key} index={key} details={this.state.activities[key]} addToSummary={this.addToSummary} />)
          }
          </ul>
        </div>
          <Summary />
          <AddActivity loadActivities={this.loadActivities} />
      </div>
    );
  }
}

export default App;

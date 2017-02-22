import React from 'react';

import { equalizer } from '../helpers.js'

class Summary extends React.Component {
  constructor (){
    super()
    this.renderSummary = this.renderSummary.bind(this)
  }

  renderSummary (key){
    const activity = this.props.activities[key]
    const summary = this.props.summary[key]
    const equalized = equalizer(activity.moreorless, activity.minqty, activity.weight, summary)
    return (
      <li key={key}>
        {equalized} points for {activity.name} today.
        <button onClick={() => this.props.removeSummaryId(key)}>&times;</button>
      </li>
    )
  }

  render() {
    // create array of state keys, in this case act1, act2, etc
    const summaryIds = Object.keys(this.props.summary)
    const activityIds = Object.keys(this.props.activities)
    let runIt;
    if (activityIds.length > 0) {
      runIt = summaryIds.map(this.renderSummary);
    }

    console.log("this.props.activities", this.props.activities)
    console.log("this.props.summary", this.props.summary)
    console.log("activity Ids", activityIds);
    console.log("summary Ids", summaryIds);
    const total = summaryIds.reduce((prevTotal, key) => {
      const activity = this.props.activities[key]
      const summary = this.props.summary[key]

      const exists = activity

      if (exists) {
       return parseFloat((prevTotal + (summary * activity.moreorless) * (activity.weight / 10)).toFixed(1))
      }

      return prevTotal
    }, 0)
    return (
      <div className="panel">
      <h2>Summary</h2>
        {runIt}

        Today's total: {total}
      </div>
    )
  }
}

export default Summary;

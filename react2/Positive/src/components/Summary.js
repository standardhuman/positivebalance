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
      </li>
    )
  }

  render() {
    // create array of state keys, in this case act1, act2, etc  
    const summaryIds = Object.keys(this.props.summary)

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
        {summaryIds.map(this.renderSummary)}

        Today's total: {total}
      </div>
    )
  }
}

export default Summary;

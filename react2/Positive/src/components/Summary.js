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
      <div key={key}>
        {equalized} {activity.name} points today.
        <button onClick={() => this.props.removeSummaryId(key)}>&times;</button>
      </div>
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
    let style;
    let style2;
    let smiler;
    if (total >= 0) {
      style = {paddingLeft: total * 10};
    }
      else {
         style2 = {paddingRight: total * -10};
         smiler = ": ( don't do drugs";
       }

    return (
      <div className="summary">
      <h2>Summary</h2>
        {runIt}
        <div className="containIt">
          <div className="barGraphic" style={style}></div>
          <div className="barGraphic2" style={style2}></div>
        </div>
        <div className="zero">{total}</div>
        {smiler}
      </div>
    )
  }
}

export default Summary;

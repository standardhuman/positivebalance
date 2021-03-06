import React from 'react';
import Modify from './Modify'

import { pluralize } from '../helpers'

class Activity extends React.Component {
  constructor (){
    super ()
    this.sendSummary = this.sendSummary.bind(this)
    // this.editActivity = this.editActivity.bind(this)
  }

  sendSummary () {
    const howManyTimes = this.summary.value || 0
    const key = this.props.index
    this.props.addToSummary(howManyTimes, key)
  }

  render() {
    const {name, minqty, unit} = this.props.details || ""
    if(!this.props.details) {
      return null
    } return (
      <div className="activity">
        <h2>{name}</h2>
        <p>How many times did you {name.toLowerCase()} {minqty} {pluralize(minqty, unit)} today?</p>
        <input ref={(input) => this.summary = input} type="text" placeholder="1, 2, 3..." />
        <button onClick={this.sendSummary}>Go</button>
        <Modify index={this.props.index} details={this.props.details} updateActivity={this.props.updateActivity} removeActivity={this.props.removeActivity}/>
      </div>

    )
  }
}

export default Activity;

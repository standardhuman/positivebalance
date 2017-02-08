import React from 'react';
import Modify from './Modify'

import { pluralize } from '../helpers'

class Activity extends React.Component {
  constructor (){
    super ()
    this.sendSummary = this.sendSummary.bind(this)
    this.editActivity = this.editActivity.bind(this)
  }

  sendSummary () {
    const howManyTimes = this.summary.value
    const key = this.props.index
    this.props.addToSummary(howManyTimes, key)
  }

  editActivity (){
    document.querySelector('.editForm').classList.toggle('showForm')
  }

  render() {
    const {name, moreorless, minqty, unit} = this.props.details
    return (
      <div>
        <h2>{name}</h2>
        <p>How many times did you {name.toLowerCase()} for {minqty} {pluralize(minqty, unit)}?</p>
        <input ref={(input) => this.summary = input} type="text" placeholder="1, 2, 3..." />
        <button onClick={this.sendSummary}>Go</button>

        <h6><a onClick={this.editActivity}>Edit</a></h6>

      </div>

    )
  }
}

export default Activity;

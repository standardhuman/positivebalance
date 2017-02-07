import React from 'react';

class Activity extends React.Component {
  constructor (){
    super ()
    this.sendSummary = this.sendSummary.bind(this)
  }

  sendSummary () {
    const howManyTimes = this.summary.value
    const key = this.props.index
    this.props.addToSummary(howManyTimes, key)
  }

  render() {
    return (
      <div>
        <h2>{this.props.details.name}</h2>
        <p>How many times did you {this.props.details.name.toLowerCase()} for {this.props.details.minqty} {this.props.details.unit}?</p>
        <input ref={(input) => this.summary = input} type="text" placeholder="how many?" />
        <button onClick={this.sendSummary}>Go</button>
      </div>

    )
  }
}

export default Activity;

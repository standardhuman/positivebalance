import React from 'react'

// calculate and render points
export default class EachActivitySummary extends React.Component {

  render () {

    const summaryValue = ((this.props.activity.howmanyunits * this.props.activity.weight / 10) * this.props.activity.moreorless)

    console.log("summaryValue:", summaryValue);

    return (
      <div>
        {this.props.activity.name}: {" "}
        {summaryValue}
      </div>
    )
  }
}

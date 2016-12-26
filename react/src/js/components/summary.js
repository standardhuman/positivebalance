import React from 'react'
import EachActivitySummary from './eachactivitysummary.js'


export default class Summary extends React.Component {

  constructor(props) {
      super(props);
      // this.state = {model: []};
  }
  // componentDidMount(){
  //   let newArray  = this.state.model.slice()
  //
  //   this.props.activities.forEach((activity) => {
  //     newArray.push(<EachActivitySummary activity={activity} />)
  //     this.setState({model: newArray})
  //
  //   })
  // }
  render () {

    return (
      <div>
        {this.props.activity.name}
        <EachActivitySummary activity={this.props.activity} />
      </div>
    )

  }
}

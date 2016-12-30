import React from "react"
import CreateActivity from "./createactivity"
import NewUpdateActivity from "./newupdateactivity"
import EachActivitySummary from "./eachactivitysummary"
// source of state
// has functionality to catch state updates in children
export default class ActivityCRUD extends React.Component {
  constructor(props) {
      super(props);
      this.state = {activities: [], summaryNumbers: []};
  }

  updateHowMany(val, actName){
    //logic for selecting the right spot in the activity array here
    for(var i = 0; i < this.state.activities.length; i++){
      if(this.state.activities[i].name === actName){

     let temparray = this.state.activities.slice()
     temparray[i].howmanyunits = val
     this.setState({activities: temparray})
        return
      }else{
      }
    }
  }

  createAndAddActivity(name, moreorless, qty, unit, weight){
    let newObject = {
      name: name,
      moreorless: moreorless,
      qty: qty,
      unit: unit,
      weight: weight,
      didido: "",
      howmanyunits: ""
    }

    let newArray  = this.state.activities.slice()
    newArray.push(newObject)
    this.setState({activities: newArray})
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/activities', {
  	method: 'get'
      }).then((response) => {
        response.json().then((message) => {
          this.setState({activities: message.data})
        })
      }).catch(function(err) {})
  }

  theFinalTotal(){
    let summaryNumbers = []

    this.state.activities.forEach(function(activity){
     summaryNumbers.push(((activity.howmanyunits * activity.weight / 10) * activity.moreorless))
    })
     console.log("summaryNumbers:", summaryNumbers)

   let sum = summaryNumbers.reduce(function(acc, curr){
     return curr+acc
   }, 0).toFixed(2)

   console.log("sum:", sum)

   this.setState({
     total: sum
   })
  }

  render() {
    console.log("this.state.activities", this.state.activities)
    let update = this.updateHowMany.bind(this)
    let theFinalTotal = this.theFinalTotal.bind(this)

      if (this.state.activities.length > 0) {
        return (
          <div>
            <CreateActivity createAndAddActivity={this.createAndAddActivity.bind(this)}/>

            {this.state.activities.map(function(val, index, col){
              return <NewUpdateActivity activity={val} updateHowMany={update} theFinalTotal={theFinalTotal} />
            })}

            {this.state.activities.map(function(val, index, col){
              return (<EachActivitySummary activity={val} />)
            })}
            {this.state.total}
          </div>
        )
      } else {
        return (
          <div><p>"loading"</p></div>
        )
      }
    }
}

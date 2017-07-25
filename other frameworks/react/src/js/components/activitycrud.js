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
    fetch('https://shielded-retreat-42898.herokuapp.com/api/activities', {
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


    const appContainer = {"border": "2px solid grey", "width": "50%", "margin": "0 auto 0 auto", "borderRadius": "2rem"}
    const createActContainer = {"border": "2px solid grey", "margin": "2rem auto 2rem auto", "padding": "1rem", "width": "80%", "borderRadius": "1rem"}
    const summaryStyle = {"border": "2px solid grey", "width": "33%", "margin": "2rem auto 2rem auto", "padding": "1rem", "borderRadius": "1rem"}
    const titleStyle = {"fontFamily": "ariel", "fontSize": "2.5rem", "textAlign": "center", "display": "block", "margin": "1rem auto 1rem auto", "width": "50%"}
    const flex = {}

      if (this.state.activities.length > 0) {
        return (
          <div style={appContainer}>

          <span style={titleStyle}>Positive Balance</span>

            <div style={createActContainer}>
            <CreateActivity createAndAddActivity={this.createAndAddActivity.bind(this)}/>
            </div>

            <div style={flex}>
            <div style={summaryStyle}>
            {this.state.activities.map(function(val, index, col){
              return <NewUpdateActivity activity={val} updateHowMany={update} theFinalTotal={theFinalTotal} />
            })}
            </div>

            <div style={summaryStyle}>
            {this.state.activities.map(function(val, index, col){
              return (<EachActivitySummary activity={val} />)
            })}
            </div>

            <div style={summaryStyle}>
            Total:
            {this.state.total}
            </div>
            </div>

          </div>
        )
      } else {
        return (
          <div><p>"loading"</p></div>
        )
      }
    }
}

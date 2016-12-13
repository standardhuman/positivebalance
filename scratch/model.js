'use strict'
// Create new activity
let activity = [

  {
    name: "run",
    unitName: "mile",
    minQty: 1,
    moreorless: "more",
    weight: 8,
    didIDo: "",
    howManyUnits: ""
},

{
  name: "drink",
  unitName: "drink",
  minQty: 1,
  moreorless: "less",
  weight: 5,
  didIDo: "",
  howManyUnits: ""
},

{
  name: "meditate",
  unitName: "minute",
  minQty: 3,
  moreorless: "more",
  weight: 8,
  didIDo: "",
  howManyUnits: ""
}

];

// Update properties to existing activity at end of day
  for (var i = 0; i < activity.length; i++) {
    if(activity[i].name === "run"){
      activity[i].howManyUnits = "5";
      activity[i].didIDo = "true";
      console.log(activity[i]);; // display updated activity[i] in browser
      }
    }

// Summarize (across ) activities
  // if I did the activity, display name and moreorless
  for (var i = 0; i < activity.length; i++) {
    if(activity[i].didIDo === "true"){
      console.log(activity[i].name); //display in summary
      console.log(activity[i].moreorless); //display in summary
      }
    }

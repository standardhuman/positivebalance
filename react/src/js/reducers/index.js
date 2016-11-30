import {combineReducers} from "redux"
import ActivityReducer from "./reducer-activities"

const allReducers = combineReducers({
  activities : ActivityReducer
})


export default allReducers;

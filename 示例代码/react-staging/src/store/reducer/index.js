// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from "redux";
import countReducer from "./count";
import personReducer from "./person";

// 汇总所有的reducer变为一个总的reducer
export default combineReducers(
  {
    count: countReducer,
    personData: personReducer
  }
)


// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
// 引入汇总之后的reducer
import allReducer from './reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
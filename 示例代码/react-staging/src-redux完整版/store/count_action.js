import { INCREASE, DECREASE } from "./constant"
import store from "./store"

export const increase = data => ({type: INCREASE, data})
export const decrease = data => ({type: DECREASE, data})

// return可以省略  但若是直接写成data => {type: INCREASE, data}   花括号会被认为是函数体{}  所以若return的是json时，要包一个()
// export const increase = data => {
//   return {type: INCREASE, data}
// }

// dispatch(action) 同步时，action为一般Object对象；异步时，action为函数
export const increaseAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch(increase(data))
      dispatch(increase(data))
    }, time)
  }
}
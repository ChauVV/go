
import {
  setLogined
} from 'controller/Redux/actions/globalActions'
let _this

export const setThis = (THIS) => {
  return (dispatch, getState) => {
    _this = THIS
  }
}

export const setLogin = () => {
  console.log('setLogin: ', true)
  return (dispatch, getState) => {
    _this.setState({})
    dispatch(setLogined(true))
  }
}

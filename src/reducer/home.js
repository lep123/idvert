import { handleActions } from 'redux-actions'

// 最外层 必须这么写
const defaultState = {
  Data: [],
}
export default handleActions({
  SET_DATA: (state, action) => {
    return { ...state,Data:action.payload};
  }
}, defaultState)



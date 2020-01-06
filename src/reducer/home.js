import { handleActions } from 'redux-actions'

// 最外层 必须这么写
const defaultState = {
  Data: [],
}

export default handleActions({
  CESHI: (state, action) => ({ ...state, Data: action.payload })
}, defaultState)


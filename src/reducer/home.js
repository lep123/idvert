import { handleActions } from 'redux-actions'

// 最外层 必须这么写
const defaultState = {
  Data: [],
  loading:  false,
  Datas: [],
}
export default handleActions({
  CESHI: (state, action) => ({ ...state, Data: action.payload }),
  LOADING: (state, action) => ({ ...state, loading: action.payload }),
  SET_DATA: (state, action) => {
    return { ...state,Datas:action.payload};
  }
}, defaultState)



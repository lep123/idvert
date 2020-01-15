import { handleActions } from 'redux-actions'
import faceData from '@/constants/facebook.js'
import _ from 'loadsh'
// 最外层 必须这么写
const defaultState = {
  Data: [],
  loading:  false,
  localData: [],
}


function getData (lcoalData) {
  const data = _.get(faceData, 'data[3].colum[0].options', [])
  data.map(v => {
    v.option = lcoalData[v.key]
    return v
  })
 
  return faceData.data
  
 
}

export default handleActions({
  CESHI: (state, action) => ({ ...state, Data: action.payload }),
  LOADING: (state, action) => ({ ...state, loading: action.payload }),
  LOCAL_DATA: (state, action) => {
    const data =  getData(_.get(action, 'payload.resultMap.data', []))
    
    return { ...state, localData: data }
  }
}, defaultState)


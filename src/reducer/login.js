
import { handleActions } from 'redux-actions'

const defaultState = {
    userInfo:'',
}
export default handleActions({
    LOGIN: (state, action) =>{ 
       
        return {...state, userInfo: action.payload.result }
    }
}, defaultState)

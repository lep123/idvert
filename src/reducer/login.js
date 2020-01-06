
import { handleActions } from 'redux-actions'

const defaultState = {
    userInfo:'',
}
export default handleActions({
    LOGIN: (state, action) => ({ ...state, userInfo: action.payload.result })
}, defaultState)

import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState = {
    sharepoint:[]
}

export default handleActions<any,any>({
    [Actions.LOAD_SHAREPOINT]:(state,action) => {
        return state
    }
}, initialState);
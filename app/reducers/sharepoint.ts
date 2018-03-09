import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';
import {  RootState } from '../models/models';

const initialState:RootState = {
    servers:[]
}

export default handleActions<any,any>({
    [Actions.LOAD_SHAREPOINT]:(state,action) => {
        return state
    }
}, initialState);
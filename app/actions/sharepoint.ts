import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const loadSharePoint = createAction<any>(Actions.LOAD_SHAREPOINT);

import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import { SharePointServer } from '../models/models';

export const loadSharePoint = createAction<SharePointServer[]>(Actions.LOAD_SHAREPOINT);

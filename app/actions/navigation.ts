// import { createAction } from 'redux-actions';
// import * as Actions from '../constants/actions';
// import { push  } from 'react-router-redux';
import {History} from 'history';


export function goToExplorePage(history: History) {
    return (dispatch: Function) => {
        history.push('/explore');
      };
}

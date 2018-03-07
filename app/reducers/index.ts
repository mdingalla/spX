import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import sharepoint from './sharepoint';


export interface IState {
  routing:any;
  sharepoint:any;
}


const rootReducer = combineReducers<IState>({
  routing: routing as Reducer<any>,
  sharepoint: sharepoint as Reducer<any>
});

export default rootReducer;

import { combineReducers } from 'redux';

import Home from './Home/State/reducers';
import { HomeState }  from './Home/State/store'; 


export interface State {
    Home: HomeState;
}

export default combineReducers({
    Home,
});

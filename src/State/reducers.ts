import { combineReducers } from 'redux';

import Home from '../Home/state/reducers';
import { HomeState }  from '../Home/state/store'; 

import Product from '../Product/state/reducers';
import { ProductState } from '../Product/state/store';

export interface State {
    Home: HomeState;
    Product: ProductState;
}

export default combineReducers({
    Home,
    Product,
});

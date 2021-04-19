import { combineReducers } from 'redux';

import Home from './home/reducers';
import { HomeState }  from './home/store'; 

import Product from './product/reducers';
import { ProductState } from './product/store';

export interface State {
    Home: HomeState;
    Product: ProductState;
}

export default combineReducers({
    Home,
    Product,
});

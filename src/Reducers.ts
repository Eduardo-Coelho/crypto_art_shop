import { combineReducers } from 'redux';

import Home from './Home/State/reducers';
import { HomeState }  from './Home/State/store'; 

import Product from './Product/State/reducers';
import { ProductState } from './Product/State/store';

export interface State {
    Home: HomeState;
    Product: ProductState;
}

export default combineReducers({
    Home,
    Product,
});

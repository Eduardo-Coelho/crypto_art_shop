import { combineReducers } from 'redux';

import home from './home/reducers';
import { HomeState }  from './home/store'; 

import product from './product/reducers';
import { ProductState } from './product/store';

export interface State {
    home: HomeState;
    product: ProductState;
}

export default combineReducers({
    home,
    product,
});

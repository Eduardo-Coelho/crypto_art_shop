import { combineReducers } from 'redux';

import home from './home-state/reducers';
import { HomeState }  from './home-state/store'; 

import product from './product-state/reducers';
import { ProductState } from './product-state/store';

import basket from './basket-state/reducers';
import { BasketState } from './basket-state/store';

import gallery  from './gallery-state/reducers';
import { GalleryState } from './gallery-state/store';

export interface State {
    home: HomeState;
    product: ProductState;
    basket: BasketState;
    gallery: GalleryState;
}

export default combineReducers({
    home,
    product,
    basket,
    gallery,
});

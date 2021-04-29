import { combineReducers } from 'redux';

import home from './home/reducers';
import { HomeState }  from './home/store'; 

import product from './product/reducers';
import { ProductState } from './product/store';

import basket from './basket/reducers';
import { BasketState } from './basket/store';

import gallery  from './gallery/reducers';
import { GalleryState } from './gallery/store';

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

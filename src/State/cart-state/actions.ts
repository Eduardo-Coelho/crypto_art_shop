import { useSelector } from 'react-redux';
import { State } from '../reducers';
import { BasketState } from './store';

export const ADD_BASKET = 'add_basket';
export const UPDATE_BASKET = 'update_basket';
export const REMOVE_FROM_BASKET = 'remove_from_basket';
export const RESET_BASKET_STATE = 'reset_basket_state';


export type BasketTypes = AddToBasketAction | UpdateBasketAction | RemoveFromBasketAction | any;

export interface BasketPayload {
  items: []
}

export interface AddToBasketAction {
  type: string;
  payload: BasketPayload;
}

export interface UpdateBasketAction {
  type: string;
  payload: BasketPayload;
}

export interface RemoveFromBasketAction {
  type: string;
  id: string;
}

export const addToBasket = (payload: BasketPayload): AddToBasketAction => ({
  type: ADD_BASKET,
  payload,
});

export const updateToBasket = (payload: BasketPayload): UpdateBasketAction => ({
  type: UPDATE_BASKET,
  payload,
});

export const removeFromBasket = (id: string): RemoveFromBasketAction => ({
  type: REMOVE_FROM_BASKET,
  id,
});

export const resetBasketState = (): {type:string} => ({
  type: RESET_BASKET_STATE,
});


/**
 * 
 * @description Utility functions
 */


export const RestBasketState = (store:any): void => {
  store.dispatch(resetBasketState());
}

export const GetBasktetState = (): BasketState => {
 const { cart } = useSelector((state: State) => state);
return cart;
}

export const RemoveFromBasket = (store:any, id: string) => {
  store.dispatch(removeFromBasket(id));
}

export const AddToBasket = (store:any, payLoad: any) => {
  store.dispatch(addToBasket(payLoad));
}
export const ADD_BASKET = 'add_basket';
export const UPDATE_BASKET = 'update_basket';
export const REMOVE_BASKET = 'remove_basket';


export type BasketTypes = AddToBasketAction | UpdateBasketAction | RemoveBasketAction;

export interface BasketPayload {
  items: []
}

/**
 * @description Add to Basket
 */

export interface AddToBasketAction {
  type: string;
  payload: BasketPayload;
}

export const addToBasket = (payload: BasketPayload): AddToBasketAction => ({
  type: ADD_BASKET,
  payload,
});


/**
 * @description Update Basket
 */

export interface UpdateBasketAction {
  type: string;
  payload: BasketPayload;
}

export const updateToBasket = (payload: BasketPayload): UpdateBasketAction => ({
  type: UPDATE_BASKET,
  payload,
});

/**
 * @description Remove from Basket
 */

export interface RemoveBasketAction {
  type: string;
  payload: BasketPayload;
}

export const removeBasket = (payload: BasketPayload): RemoveBasketAction => ({
  type: UPDATE_BASKET,
  payload,
});

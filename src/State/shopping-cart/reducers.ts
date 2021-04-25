import { ADD_BASKET, BasketTypes, REMOVE_BASKET, RESET_BASKET_STATE, UPDATE_BASKET } from './actions';
import { BasketState } from './store';


const DEFAULT_STATE: BasketState = {
  items: [],

};

const basket = (state = DEFAULT_STATE, action: BasketTypes):BasketState => {

  switch (action.type) {
    case ADD_BASKET:
      return { items:[...state.items, action.payload] };
  
    case RESET_BASKET_STATE:
      return { items: [] };

    default:
      break;
  }
  return state;
}

export default basket;

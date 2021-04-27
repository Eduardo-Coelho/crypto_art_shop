import { ADD_BASKET, BasketTypes, REMOVE_FROM_BASKET, RESET_BASKET_STATE, UPDATE_BASKET } from './actions';
import { BasketState } from './store';


const DEFAULT_STATE: BasketState = {
  items: [],

};

const basket = (state = DEFAULT_STATE, action: BasketTypes ):any => {

  switch (action.type) {
    case ADD_BASKET:
      return { items:[...state.items, action.payload] };

    case REMOVE_FROM_BASKET:
      const filterOut = state.items.filter((item:any)=>item.id !== action.id);
      return { items:filterOut };
  
    case RESET_BASKET_STATE:
      return { items: [] };

    default:
      break;
  }
  return state;
}

export default basket;

import { ADD_BASKET, BasketTypes, REMOVE_BASKET, UPDATE_BASKET } from './actions';
import { BasketState } from './store';


const DEFAULT_STATE: BasketState = {
  items: [],

};

const basket = (state = DEFAULT_STATE, action: BasketTypes):BasketState => {

  switch (action.type) {
    case ADD_BASKET:
      return { ...action.payload };
    case UPDATE_BASKET:
      return { ...action.payload };

    case REMOVE_BASKET:
      return { ...action.payload };

    default:
      break;
  }
  return state;
}

export default basket;

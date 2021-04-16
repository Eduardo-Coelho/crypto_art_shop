import { ProductState } from './store';
import { ReceiveProductAction, RECEIVE_PRODUCT } from './actions';

const DEFAULT_STATE: ProductState = {
  content: {
    id: '',
    name: '',
    price: 0,
    availableLeft: 0,
    availableMax: 0,
    Art: [],
  }
};

const Product = (state = DEFAULT_STATE, action: ReceiveProductAction,):any => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      debugger;
      return { ...action.payload };

    default:
      break;
  }
  return state;
}

export default Product;

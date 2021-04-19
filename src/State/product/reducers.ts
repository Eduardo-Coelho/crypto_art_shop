import { ProductState } from './store';
import { ReceiveProductAction, RECEIVE_PRODUCT, REQUEST_PRODUCT } from './actions';

const DEFAULT_STATE: ProductState = {
  loading: false,
    id: '',
    name: '',
    price: 0,
    availableLeft: 0,
    availableMax: 0,
    cdn: [],
};

const product = (state = DEFAULT_STATE, action: ReceiveProductAction,):any => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return { ...action.payload, loading: false };
    case REQUEST_PRODUCT:
      return { ...state, loading: true};
    default:
      break;
  }
  return state;
}

export default product;

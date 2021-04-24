import { ProductState } from './store';
import { ReceiveProductAction, RECEIVE_PRODUCT, REQUEST_PRODUCT } from './actions';

const DEFAULT_STATE: ProductState = {
  productSlug: '',
  loading: true,
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
      return { ...action.payload, productSlug: action.productSlug, loading: false };
    case REQUEST_PRODUCT:
      return { loading: true};
    default:
      break;
  }
  return state;
}

export default product;

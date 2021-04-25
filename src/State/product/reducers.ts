import { ProductState } from './store';
import { ReceiveProductAction, RECEIVE_PRODUCT, REQUEST_PRODUCT, RESET_PRODUCT_STATE } from './actions';

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

const product = (state = DEFAULT_STATE, action: ReceiveProductAction ):ProductState => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return { ...action.payload, productSlug: action.productSlug, loading: false };

    case REQUEST_PRODUCT:
      return {...state, loading: true};

    case RESET_PRODUCT_STATE:
      return {
        productSlug: '',
        loading: true,
          id: '',
          name: '',
          price: 0,
          availableLeft: 0,
          availableMax: 0,
          cdn: [],
      };

    default:
      break;
  }
  return state;
}

export default product;

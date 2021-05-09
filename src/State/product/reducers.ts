import { ProductState } from './store';
import { ReceiveProductAction, RECEIVE_PRODUCT, RESET_PRODUCT_STATE } from './actions';

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
    return state;
  }
}

export default product;

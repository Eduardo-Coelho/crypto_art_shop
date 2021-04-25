import axios from 'axios';
import { useSelector } from 'react-redux';
import ENDPOINT_URL from '../../ENDPOINT_URL';
import { State } from '../reducers';
import { ProductState } from './store';

export const REQUEST_PRODUCT = 'request_product';
export const RECEIVE_PRODUCT = 'receive_product';
export const RESET_PRODUCT_STATE = 'reset_product_state';

export interface Product {
  id: string;
  name: string;
  price: number;
  availableLeft: number;
  availableMax: number;
  cdn: string[];
}

export interface RequestProductAction {
  productSlug: string;
  type: string;
}

export interface ReceiveProductAction {
  type: string;
  payload: Product;
  productSlug: string;
}

export const requestProduct = (productSlug:string): RequestProductAction => ({
  type: REQUEST_PRODUCT,
  productSlug,
});

export const receiveProduct = ( productSlug: string, payload: Product,): ReceiveProductAction => ({
  type: RECEIVE_PRODUCT,
  payload,
  productSlug,
});

export const resetProductState = (): {type:string} => ({
  type: RESET_PRODUCT_STATE,
});

export const RestProductState = (store:any):void => {
  store.dispatch(resetProductState());
}

export const GetProductState = ():ProductState => {
 const { product } = useSelector((state: State) => state);
return product;
}


export const fetchProduct = (productSlug: string): any => async (
  dispatch: any,
): Promise<ReceiveProductAction | string> => {
  dispatch(requestProduct(productSlug));

  try {
    const { data } = await axios.get(`${ENDPOINT_URL.Product}${productSlug}`);
    return dispatch(receiveProduct(productSlug, data));
  } catch (err) {
    /** @todo Error handling. */
    return '';
  }
};
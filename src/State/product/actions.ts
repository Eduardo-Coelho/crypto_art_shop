import axios from 'axios';
import ENDPOINT_URL from '../../ENDPOINT_URL';

export const REQUEST_PRODUCT = 'request_product';
export const RECEIVE_PRODUCT = 'receive_product';

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
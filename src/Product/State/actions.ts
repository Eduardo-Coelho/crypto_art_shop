'--unhandled-rejections=strict';

import axios from 'axios';
import ENDPOINT_URL from '../../ENDPOINT_URL';

export const REQUEST_PRODUCT = 'request_product';
export const RECEIVE_PRODUCT = 'receive_product';

export interface ProductPayload {
  content: Product;
}


export interface Product {
  id: string;
  name: string;
  price: number;
  availableLeft: number;
  availableMax: number;
  Art: string[];
}



export interface RequestProductAction {
  type: string;
}

export interface ReceiveProductAction {
  type: string;
  payload: ProductPayload;
}

export const requestProduct = (): RequestProductAction => ({
  type: REQUEST_PRODUCT,
});

export const receiveProduct = (payload: ProductPayload): ReceiveProductAction => ({
  type: RECEIVE_PRODUCT,
  payload,
});

export const fetchProduct = (dispatch:any): void => {
  dispatch(requestProduct());
    axios.get(ENDPOINT_URL.Home).then((res:any)=>{
    const {data} = res;
      return dispatch(receiveProduct(data))
    }).catch((error:any)=>{
    console.log(error)
      return error;
    })
};

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

export const receiveProduct = (payload: Product, productSlug: string): ReceiveProductAction => ({
  type: RECEIVE_PRODUCT,
  payload,
  productSlug,
});


export const fetchProduct = (productSlug: string, dispatch:any): void => {
  dispatch(requestProduct(productSlug));
    axios.get(`${ENDPOINT_URL.Product}${productSlug}`).then((res:any)=>{
    const {data} = res;
    return dispatch(receiveProduct(data, productSlug));
    }).catch((error:any)=>{
    console.log(error)
    return error;
    })
};


// export const fetchProduct = (productSlug: string, dispatch:any): any => async ():Promise<Product | string > => {
//   dispatch(requestProduct(productSlug));
//     try {
//     const { data } = await axios.get(`${ENDPOINT_URL.Product}${productSlug}`)
//     return dispatch(receiveProduct(data, productSlug)); 
//     } catch (error) {
//       return '';
//     }
// }
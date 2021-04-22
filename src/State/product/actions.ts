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

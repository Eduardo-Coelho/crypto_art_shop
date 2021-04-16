import { Product } from './actions';

export interface ProductState {
  loading: boolean;
  content: Product;
}


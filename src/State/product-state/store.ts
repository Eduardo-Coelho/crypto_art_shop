export interface ProductState {
  productSlug: string;
  loading: boolean;
  id: string;
  name: string;
  price: number;
  availableLeft: number;
  availableMax: number;
  cdn: string[];
}


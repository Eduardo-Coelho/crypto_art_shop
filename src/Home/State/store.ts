import { HomePayload } from './actions';

export interface HomeState {
  loading: boolean;
  content: HomePayload;
}


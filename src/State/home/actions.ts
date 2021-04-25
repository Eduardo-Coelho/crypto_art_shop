import axios from 'axios';
import { useSelector } from 'react-redux';
import ENDPOINT_URL from '../../ENDPOINT_URL';
import { State } from '../reducers';
import { HomeState } from './store';

export const REQUEST_HOME = 'request_home';
export const RECEIVE_HOME = 'receive_home';
export const RESET_HOME_STATE = 'reset_home_state';


export interface HomePayload {
  showCasing: ShowCasing;
  featuredArt: Contents[];
}

export interface ShowCasing {
  id: string;
  name: string;
  contents: Contents[];
}

export interface Contents {
  id: string,
  name: string;
  cdn: string;
}

export interface RequestHomeAction {
  type: string;
}

export interface ReceiveHomeAction {
  type: string;
  payload: HomePayload;
}

export const requestHome = (): RequestHomeAction => ({
  type: REQUEST_HOME,
});

export const receiveHome = (payload: HomePayload): ReceiveHomeAction => ({
  type: RECEIVE_HOME,
  payload,
});

export const  resetHomeState= (): {type:string} => ({
  type: RESET_HOME_STATE,
});


export const ResetHomeState = (store:any) => {
  store.dispatch(resetHomeState());
}


export const GetHomeState = (): HomeState => {
  const { home } = useSelector((state: State) => state);
  return home;
}

  export const fetchHome = (): any => async (
    dispatch: any,
  ): Promise<ReceiveHomeAction | string> => {
    dispatch(requestHome());
  
    try {
      const { data } = await axios.get(`${ENDPOINT_URL.Home}`);
      return dispatch(receiveHome(data));
    } catch (err) {
      /** @todo Error handling. */
      return '';
    }
  };
'--unhandled-rejections=strict';

import axios from 'axios';
import ENDPOINT_URL from '../../ENDPOINT_URL';

export const REQUEST_HOME = 'request_home';
export const RECEIVE_HOME = 'receive_home';

export interface HomePayload {
  content: any;
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

export const fetchHome = (dispatch:any): void => {
  dispatch(requestHome());
    axios.get(ENDPOINT_URL.Home).then((res:any)=>{
    const {data} = res;
      return dispatch(receiveHome(data))
    }).catch((error:any)=>{
    console.log(error)
      return error;
    })
};

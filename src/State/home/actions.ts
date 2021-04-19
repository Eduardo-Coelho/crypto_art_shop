import axios from 'axios';
import ENDPOINT_URL from '../../ENDPOINT_URL';

export const REQUEST_HOME = 'request_home';
export const RECEIVE_HOME = 'receive_home';


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

// export const fetchHome = ( dispatch:any): any => async ():Promise<HomePayload | string > => {
//   debugger;
//   dispatch(requestHome());
//     try {
//     const { data } = await axios.get(`${ENDPOINT_URL.Home}`);
//     return dispatch(receiveHome(data)); 
//     } catch (error) {
//       return '';
//     }
// }

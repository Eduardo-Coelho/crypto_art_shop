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

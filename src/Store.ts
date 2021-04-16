import {
    createStore, applyMiddleware, Store, Action,
  } from 'redux';
  import thunk, { ThunkAction } from 'redux-thunk';
  import reducers, { State } from './Reducers';
  
  export type Thunk<ReturnType = void> = ThunkAction<
    ReturnType,
    State,
    unknown,
    Action<string>
  >
  
  export default (state = {}): Store => createStore(
    reducers,
    state,
    applyMiddleware(thunk),
  );
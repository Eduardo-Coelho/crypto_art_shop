import { HomeState } from './store';
import { ReceiveHomeAction, RECEIVE_HOME, REQUEST_HOME, RESET_HOME_STATE } from './actions';

const DEFAULT_STATE: HomeState = {
  loading: true,
  featuredArt: null,
  showCasing: null,
};

const home = (state = DEFAULT_STATE, action: ReceiveHomeAction):HomeState => {
  switch (action.type) {
    case RECEIVE_HOME:
      return { ...action.payload, loading: false };
    case REQUEST_HOME:
      return { ...state, loading: true};
    case RESET_HOME_STATE:
      return {
        loading: true,
        featuredArt: null,
        showCasing: null,
      };
    default:
      break;
  }

  return state;
}

export default home;

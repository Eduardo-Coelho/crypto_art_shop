import { HomeState } from './store';
import { ReceiveHomeAction, RECEIVE_HOME, REQUEST_HOME } from './actions';

const DEFAULT_STATE: HomeState | any = {
  loading: false,
  content: {
    featuredArt: {
    id: '',
    name: '',
    price: 0,
    Art: [],
  },
  ShowCasing: [],
 }
};

const Home = (state = DEFAULT_STATE, action: ReceiveHomeAction,):any => {

  switch (action.type) {
    case RECEIVE_HOME:
      return { ...action.payload, loading: false };
    case REQUEST_HOME:
      return { ...state, loading: true };
    default:
      break;
  }
  return state;
}

export default Home;

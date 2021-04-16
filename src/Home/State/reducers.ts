import { HomeState } from './store';
import { ReceiveHomeAction, RECEIVE_HOME } from './actions';

const DEFAULT_STATE: HomeState = {
  id: 0,
  name: '',
  username: '',
  email: '',
};

const Home = (state = DEFAULT_STATE, action: ReceiveHomeAction,):any => {

  switch (action.type) {
    case RECEIVE_HOME:
      debugger;
      return { ...action.payload };

    default:
      break;
  }
  return state;
}

export default Home;

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  ordersSlice: {
    data: [],
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
);

export default store;

import { combineReducers } from 'redux';
import ordersReducer from './orders';

const reducerSpec = {
  ordersSlice: ordersReducer,
};

const rootReducer = combineReducers(reducerSpec);

export default rootReducer;

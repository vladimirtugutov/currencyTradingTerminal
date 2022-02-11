import * as types from '../types/orders';

export const pushOrder = (payload) => ({
  type: types.PUSH_ORDER,
  payload,
});

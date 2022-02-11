import * as types from '../types/orders';

export default function usersReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.PUSH_ORDER: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.data = [...newState.data, payload];
      return newState;
    }

    default: {
      return state;
    }
  }
}

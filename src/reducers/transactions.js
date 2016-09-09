import { TRANSACTIONS_REQUEST, TRANSACTIONS_REQUEST_SUCCESS } from 'constants/action-types';

const initialState = {
  loading: false,
  data: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case TRANSACTIONS_REQUEST:
      return { ...state, loading: true };
    case TRANSACTIONS_REQUEST_SUCCESS: {
      const data = action.result;
      return { ...state, loading: false, data };
    }
    default:
      return state;
  }
}

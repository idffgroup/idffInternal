import { types } from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  accountId: 0,
  processState: 0,
});

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_ACCOUNT_ID_STATE:
      return Object.assign({}, state, {
        accountId: action.accountId
      });
    case types.PROFILE_DETAILS_STATE:
      return Object.assign({}, state, {
        accountId: action.accountId,
        processState: 1
      });
    default:
      return state;
  }
}

import { types } from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  open: false
});

export default function licenceAgreement(state = initialState, action = {}) {
  switch (action.type) {
    case types.CANCLE_LICENCE_AGREEMENT_STATE:
      return Object.assign({}, state, {
        open: false
      });
    case types.OPEN_LICENCE_AGREEMENT_STATE:
      return Object.assign({}, state, {
        open: true
      });
    case types.AGREE_LICENCE_AGREEMENT_STATE:
      return Object.assign({}, state, {
         open: false
      });
    default:
      return state;
  }
}

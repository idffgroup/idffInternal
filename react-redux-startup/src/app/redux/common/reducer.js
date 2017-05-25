import { types } from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  redirectUrl: null,
  showLoader: false,
  showToast: false,
  message: ''
});
export default function common(state = initialState, action = {}) {  

  switch (action.type) {
    case types.SHOW_TOAST:
      return Object.assign({}, state, {
        showToast: action.showToast,
        message: action.message
      });
    case types.SHOW_LOADER:
      return Object.assign({}, state, {
        showLoader: action.showLoader
      });
    case types.REDIRECT_URL:
      return Object.assign({}, state, {
        redirectUrl: action.redirectUrl
      });
    default:
      return state;
  }
}

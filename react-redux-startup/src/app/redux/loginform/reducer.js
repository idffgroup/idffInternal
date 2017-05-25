import { types } from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  email: '',
  password: '',
  loading: false,
  loginSuccess: false,
  user: {},
  showToastr: false,
  message: ''

});

export default function loginform(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        user: action.LoginUser
      });
    case types.LOGIN_RECEIVED:
      return Object.assign({}, state, {
        user: action.data.user,
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginSuccess: action.success
      });
    case types.LOGIN_ERROR:
      return state;
    case types.LOGOUT:
      return state;
    case types.SET_LOGIN_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case types.SET_TOASTR_LOADING:
      return Object.assign({}, state, {
        showToastr: action.toastrLoading
      });
    case types.SET_TOASTR_MESSAGE:
      return Object.assign({}, state, {
        showToastr: action.showToastr,
        message: action.error
      });
    default:
      return state;
  }
}

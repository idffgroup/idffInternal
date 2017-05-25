import { types } from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  currentState: 'begin',
  communicationType: 'mobile',
  otpType: 'forgot',
  otpId: '',
  otpCode: null,
  phoneoremailContinueClicked: false,
  otpEnterContinueClicked: false
});

export default function forgotPassword(state = initialState, action = {}) {

  switch (action.type) {
    case types.BEGIN_FORGOT_PASSWORD_STATE:
      return Object.assign({}, state, {       
        otpId: action.data.otpId,
      });
    case types.VALIDATE_FORGOT_PASSWORD_STATE:
      return Object.assign({}, state, {       
        communicationType: action.data.communicationType,
        otpId: action.data.otpId,
        otpCode: action.data.otpCode
      });
    case types.END_FORGOT_PASSWORD_STATE:
      return Object.assign({}, state, {       
        communicationType: action.data.communicationType,
        otpId: action.data.otpId,
        otpCode: action.data.otpCode
      });
    case types.SET_PHONEOREMAIL_CONTINUE:
      return Object.assign({}, state, {
        phoneoremailContinueClicked: action.isClicked
      });
    case types.SET_OTPENTER_CONTINUE:
      return Object.assign({}, state, {
        otpEnterContinueClicked: action.isClicked
      });
    default:
      return state;
  }
}

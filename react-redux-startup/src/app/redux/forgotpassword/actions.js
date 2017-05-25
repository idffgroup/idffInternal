import Storage from '../../shared/utils/Storage';
import {
  API,
  ENDPOINT
} from '../../constants/api';
import {
  loaderEvent,
  toastEvent,
  redirectEvent,
  rest,
  restlogin
} from '../common/actions';
const API_URL = API.BASE_API + ENDPOINT.LOGIN_URL;

export const types = {
  BEGIN_FORGOT_PASSWORD_STATE: 'BEGIN_FORGOT_PASSWORD_STATE',
  INIT_FORGOT_PASSWORD_STATE: 'INIT_FORGOT_PASSWORD_STATE',
  VALIDATE_FORGOT_PASSWORD_STATE: 'VALIDATE_FORGOT_PASSWORD_STATE',
  VERIFY_FORGOT_PASSWORD_STATE: 'VERIFY_FORGOT_PASSWORD_STATE',
  END_FORGOT_PASSWORD_STATE: 'END_FORGOT_PASSWORD_STATE',
  SET_PHONEOREMAIL_CONTINUE: 'SET_PHONEOREMAIL_CONTINUE',
  SET_OTPENTER_CONTINUE: 'SET_OTPENTER_CONTINUE'
};

export function setPhoneorEmailContinueClicked(isClicked) {
  return {
    type: types.SET_PHONEOREMAIL_CONTINUE,
    isClicked
  }
}

export function setOTPEnterContinueClicked(isClicked) {
  return {
    type: types.SET_OTPENTER_CONTINUE,
    isClicked
  }
}

export function beginForgotPassword(data) {
  return {
    type: types.BEGIN_FORGOT_PASSWORD_STATE,
    data
  }
}

export function initForgotPassword(data) {
  return {
    type: types.INIT_FORGOT_PASSWORD_STATE,
    data
  }
}

export function validateForgotPassword(data) {
  return {
    type: types.VALIDATE_FORGOT_PASSWORD_STATE,
    data
  }
}

export function verifyForgotPassword(data) {
  return {
    type: types.VERIFY_FORGOT_PASSWORD_STATE,
    data
  }
}

export function endForgotPassword(data) {
  return {
    type: types.END_FORGOT_PASSWORD_STATE,
    data
  }
}

export function requestForgotOtpInit(data) {
  const reqData = {
    cmd: "otp-init",
    data: {
      type: 'forgot',
      mobile: isNaN(data.otpId) ? null : data.otpId,
      email: isNaN(data.otpId) ? data.otpId : null
    }
  }
  return dispatch => { 
    dispatch(loaderEvent(true));   
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {      
      dispatch(loaderEvent(false));
      dispatch(toastEvent(data.message, true));
      let actionData = {};
      actionData.otpId = reqData.data.mobile ? reqData.data.mobile : reqData.data.email;
      actionData.communicationType = reqData.data.communicationType;
      dispatch(validateForgotPassword(actionData));
      dispatch(setPhoneorEmailContinueClicked(true));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}

export function requestForgotOtpResend(data) {
  console.log(data);
  const reqData = {
    cmd: "otp-resend",
    data: {
      type: 'forgot',
      mobile: isNaN(data.otpId) ? null : data.otpId,
      email: isNaN(data.otpId) ? data.otpId : null
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));
      //  dispatch(toastEvent(data.message, true));
      // let actionData = {};
      // actionData.otpId = reqData.otpId;
      // actionData.communicationType = reqData.communicationType;
      // dispatch(validateForgotPassword(actionData));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}
export function requestForgotOtpVerify(data) {
  const reqData = {
    cmd: "otp-resend",
    data: {
      type: 'forgot',
      mobile: isNaN(data.otpId) ? null : data.otpId,
      email: isNaN(data.otpId) ? data.otpId : null,
      otpCode: data.otpCode
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {      
      dispatch(loaderEvent(false));
      //  dispatch(toastEvent(data.message, true));
      // let actionData = {};
      // actionData.otpId = reqData.otpId;
      // actionData.communicationType = reqData.communicationType;
      // dispatch(validateForgotPassword(actionData));
      let actionData = {};
      actionData.otpId = reqData.data.mobile ? reqData.data.mobile : reqData.data.email;
      actionData.communicationType = reqData.data.communicationType;
      dispatch(endForgotPassword(actionData));
      dispatch(setOTPEnterContinueClicked(true));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}

export function requestChangePassword(data) {
  const reqData = {
    cmd: "change-password",
    data: {
      mobile: isNaN(data.otpId) ? null : data.otpId,
      email: isNaN(data.otpId) ? data.otpId : null,
      password: data.password
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));
      dispatch(redirectEvent('/login'));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}
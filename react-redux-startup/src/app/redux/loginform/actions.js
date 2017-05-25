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

import * as ProfileAction from '../profile/actions';

export const types = {
  LOGIN: 'LOGIN',
  LOGIN_RECEIVED: 'LOGIN_RECEIVED',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  SET_LOGIN_LOADING: 'SET_LOGIN_LOADING',
  SET_TOASTR_LOADING: 'SET_TOASTR_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SET_TOASTR_MESSAGE: 'SET_TOASTR_MESSAGE'
};

export function login(LoginUser) {
  return {
    type: LOGIN,
    LoginUser,
  }
}

export function loginReceived(data) {
  return {
    type: types.LOGIN_RECEIVED,
    data,
  }
}

export function isUserAuthenticated(dispatch) {
  var jwt = Storage.getJWT();
  //if(userData && userData.jwt != undefined && userData.jwt != null) {
  dispatch(loginSuccess(true)); // set login success flag to true
  //}
}

export function loginSuccess(success) {
  return {
    type: types.LOGIN_SUCCESS,
    success,
  }
}

export function setLoading(loading) {
  return {
    type: types.SET_LOGIN_LOADING,
    loading
  };
}

export function requestLoginDetails(data) {
  const reqData = {
    cmd: 'login',
    data: {
      userId: data.email,
      password: data.password
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData);
    promise.then(data => {
      dispatch(loaderEvent(false));
      Storage.setJWT(data.jwt);
      Storage.setMenu(data.menuList);
      //delete respData.data.menuList;
      Storage.setUser(data.account);
      if (data.account.role == 'default' || data.account.role == 'init') {
        //dispatch(profileAction.setAccountId(data.account.id));
        dispatch(ProfileAction.restGetProfileDetails(data.account.id));       
      } else {
        dispatch(redirectEvent('/menu'));
      }
      // dispatch(loginReceived(data));
      // dispatch(loginSuccess(true));
      //dispatch(redirectEvent('/menu'));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });

  }
}

export function requestOtpInit(data) {
  const reqData = {
    cmd: "otp-init",
    data: {
      type: data.type,
      otpId: data.otpId,
      communicationType: data.device
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(data.message, true));
      dispatch(redirectEvent('/menu'));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }

}

export function requestOtpResend(data) {
  const reqData = {
    cmd: "otp-resend",
    data: {
      type: data.type,
      otpId: data.otpId,
      communicationType: data.device
    }
  }

  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(data.message, true));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }


}

export function requestOtpVerify(data) {
  const reqData = {
    cmd: "otp-verify",
    data: {
      otpId: data.otpId,
      communicationType: data.device,
      otpCode: data.otpCode
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(data.message, true));
      dispatch(redirectEvent('/changepassword'));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}

import request from 'superagent';
import Storage from '../../shared/utils/Storage';

import {
  redirectEvent,
  loaderEvent,
  toastEvent,
  rest,
  restlogin
} from '../common/actions';

import { API, ENDPOINT } from '../../constants/api';
const API_URL = API.BASE_API + ENDPOINT.LOGIN_URL;
import * as ProfileAction from '../profile/actions';

export const types = {
  REGISTER: 'REGISTER',
  REGISTER_RECEIVED: 'REGISTER_RECEIVED',
  REGISTER_ERROR: 'REGISTER_ERROR',
  SET_REGISTER_LOADING: 'SET_REGISTER_LOADING',
  SET_TOASTR_LOADING: 'SET_TOASTR_LOADING',
  SET_EMAILOPT_SHOW: 'SET_EMAILOPT_SHOW',
  SET_MOBILEOPT_SHOW: 'SET_MOBILEOPT_SHOW',
  SET_OTP_VERIFIED: 'SET_OTP_VERIFIED',
  SET_REGISTER_ACCOUNT_STATE: 'SET_REGISTER_ACCOUNT_STATE',
  SET_REGISTER_CONTACT_DETAILS: 'SET_REGISTER_CONTACT_DETAILS',
  SET_REGISTER_ADDRESS_DETAILS: 'SET_REGISTER_ADDRESS_DETAILS',
  SET_REGISTER_BUSINESS_DETAILS: 'SET_REGISTER_BUSINESS_DETAILS'
};

export function registerContactDetails(contactDetails) {
  return {
    type: types.SET_REGISTER_CONTACT_DETAILS,
    contactDetails,
  }
}

export function registerAddressDetails(addressDetails) {
  return {
    type: types.SET_REGISTER_ADDRESS_DETAILS,
    addressDetails,
  }
}

export function registerBusinessDetails(businessDetails) {
  return {
    type: types.SET_REGISTER_BUSINESS_DETAILS,
    businessDetails,
  }
}

export function register(data) {
  return {
    type: types.REGISTER,
    data
  }
}

export function registerReceived(data) {
  return {
    type: types.REGISTER_RECEIVED,
    data,
  }
}
export function setLoading(loading) {
  return {
    type: types.SET_REGISTER_LOADING,
    loading
  };
}
export function setToastrLoading(toastrLoading) {
  return {
    type: types.SET_TOASTR_LOADING,
    toastrLoading
  };
}

export function setMobileOTPDialogShow(mobileOTPType) {
  return {
    type: types.SET_MOBILEOPT_SHOW,
    mobileOTPType
  };
}

export function setEmailOTPDialogShow(emailOTPType) {
  return {
    type: types.SET_EMAILOPT_SHOW,
    emailOTPType
  };
}

export function setOTPVerified(OTPVerified) {
  return {
    type: types.SET_OTP_VERIFIED,
    OTPVerified
  };
}

export function setRegisterAccountState(registerAccountState) {
  return {
    type: types.SET_REGISTER_ACCOUNT_STATE,
    registerAccountState
  };
}

export function requestRegisterDetails(data) {
  const reqData = {
    cmd: "registration",
    data: {
      mobile: data.mobile,
      email: data.email,
      password: data.password,
      role: 'init'
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));      
      dispatch(setRegisterAccountState('contactDetails'));
      dispatch(ProfileAction.restGetProfileDetails(data.id));
      dispatch(toastEvent(data.message, true));
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
      mobile: data.mobile,
      email: data.email
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

export function requestOtpResend(data) {
  const reqData = {
    cmd: "otp-resend",
    data: {
      type: data.type,
      mobile: data.mobile,
      email: data.email
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
      type: data.type,
      mobile: data.mobile,
      email: data.email,
      otpCode: data.password
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
     
      //dispatch(loaderEvent(false));
      reqData.data.password = sessionStorage.getItem('invoicePassword');
       console.log("Verify" + reqData.data);
      dispatch(requestRegisterDetails(reqData.data));
      dispatch(setEmailOTPDialogShow(false));
      dispatch(setMobileOTPDialogShow(false));
      dispatch(setOTPVerified(true));
      /*dispatch(toastEvent(data.message, true));
      dispatch(setRegisterAccountState('contactDetails'));*/
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}


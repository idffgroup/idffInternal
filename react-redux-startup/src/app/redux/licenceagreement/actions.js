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
  OPEN_LICENCE_AGREEMENT_STATE: 'OPEN_LICENCE_AGREEMENT_STATE',
  CANCLE_LICENCE_AGREEMENT_STATE: 'CANCLE_LICENCE_AGREEMENT_STATE',
  AGREE_LICENCE_AGREEMENT_STATE: 'AGREE_LICENCE_AGREEMENT_STATE',

};
export function cancleLicenceAgreement() { 
  return {
    type: types.CANCLE_LICENCE_AGREEMENT_STATE
  }
}
export function agreeLicenceAgreement() {  
  return {
    type: types.AGREE_LICENCE_AGREEMENT_STATE
  }
}
export function openLicenceAgreement() {  
  return {
    type: types.OPEN_LICENCE_AGREEMENT_STATE
  }
}
export function redirectLogin() {
  return dispatch => dispatch(redirectEvent('/login')); 
}

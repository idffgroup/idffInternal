import { types } from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  businessname: '',
  firstname: '',
  lastname: '',
  mobile: '',
  email: '',
  pan: '',
  website: '',
  addressline: '',
  street: '',
  area: '',
  city: '',
  state: 'ap',
  postalcode: '',
  commercialtype: 'general',
  currency: 'INR',
  password: '',
  loading: false,
  showToastr: false,
  mobileOTPType: false,
  emailOTPType: false,
  OTPVerified: false,
  registerSucceded: false,
  user: {},
  registerAccountState: 'contactDetails'
});

export default function register(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_REGISTER_CONTACT_DETAILS:
      return Object.assign({}, state, {
        businessname: action.contactDetails.businessname,
        firstname: action.contactDetails.firstname,
        lastname: action.contactDetails.lastname,
        pan: action.contactDetails.pan,
        mobile: action.contactDetails.mobile,
        email: action.contactDetails.email,
        website: action.contactDetails.website        
      });
    case types.SET_REGISTER_ADDRESS_DETAILS:
      return Object.assign({}, state, {
        addressline: action.addressDetails.addressline,
        street: action.addressDetails.street,
        area: action.addressDetails.area,
        city: action.addressDetails.city,
        state: action.addressDetails.state,
        postalcode: action.addressDetails.postalcode,                
      });
    case types.SET_REGISTER_BUSINESS_DETAILS:
      return Object.assign({}, state, {
        commercialtype: action.businessDetails.commercialtype,
        currency: action.businessDetails.currency,             
        /*registerAccountState: 'businessDetails'*/
      });
    case types.REGISTER:
      return Object.assign({}, state, {
        email: action.data.email,
        mobile: action.data.mobile,
        id: action.data.id
      });
    case types.REGISTER_RECEIVED:
      return Object.assign({}, state, {
        user: action.data,
        registerSucceded: true
      });
    case types.REGISTER_ERROR:
      return state;
    case types.SET_REGISTER_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case types.SET_TOASTR_LOADING:
      return Object.assign({}, state, {
        showToastr: action.toastrLoading
      });
    case types.SET_MOBILEOPT_SHOW:
      return Object.assign({}, state, {
        mobileOTPType: action.mobileOTPType
      });
    case types.SET_EMAILOPT_SHOW:
      return Object.assign({}, state, {
        emailOTPType: action.emailOTPType
      });
    case types.SET_OTP_VERIFIED:
      return Object.assign({}, state, {
        OTPVerified: action.OTPVerified
      });
    case types.SET_REGISTER_ACCOUNT_STATE:
      return Object.assign({}, state, {
        registerAccountState: action.registerAccountState
      });
    default:
      return state;
  }
}



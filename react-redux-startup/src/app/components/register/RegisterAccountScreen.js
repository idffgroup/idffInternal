import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as LoginAction from "../../redux/loginform/actions";
import RenderTextField from '../common/RenderTextField';
import RenderLogo from '../common/RenderLogo';
import RenderDropdownTextField from '../common/RenderDropdownTextField';
import { palette } from '../../constants/styles';
import { validate } from './RegisterAccountValidate';
import RegisterAccountMobileOTPDialog from './RegisterAccountMobileOTPDialog';
import * as RegisterAction from "../../redux/register/actions";
import * as LicenceAgreementAction from "../../redux/licenceagreement/actions";
import LicenceAgreement from '../licenceagreement/LicenceAgreement'; 
class RegisterAccountScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
       open: false,
      rememberMe: true,
      emailOTPType: false,
      mobileOTPType: false,
      OTPType: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectSignin = this.redirectSignin.bind(this);
    this.openLicenseAgreement = this.openLicenseAgreement.bind(this);
  }
  redirectSignin() {
    this.props.router.push('/login');
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  renderLoading() {
    return this.props.loginLoader ? (<CircularProgress size={60} thickness={7} />) : null;
  }

  renderLicenceAgreement() {
    return(
        <LicenceAgreement
          router={this.props.router}
          open={this.props.licenceAgreement.open}
          dispatch={this.props.dispatch}
        />
    );
  }

  openLicenseAgreement() {
    this.props.dispatch(LicenceAgreementAction.openLicenceAgreement())
  }


  renderMobileOTPContent() {
    if (this.props.mobileOTPType) {
      return (
        <RegisterAccountMobileOTPDialog
          router={this.props.router}
          open={this.props.mobileOTPType}
          dispatch={this.props.dispatch}
          button1='Verify'
          button2='Resend OTP'
          OTPType='Mobile'
          OTPMessage='Please enter the One Time Password Sent to your Mobile and Email.'
          OTPLabelMessage='One Time Password for Mobile'
          value1={localStorage.getItem('invoiceMobile')}
        />
      )
    }
    else {
      return null;
    }
  }

  renderEmailOTPContent() {
    if (this.props.emailOTPType) {
      return (
        <RegisterAccountMobileOTPDialog
          open={this.props.emailOTPType}
          dispatch={this.props.dispatch}
          button1='Verify'
          button2='Resend OTP'
          OTPType='Email'
          OTPMessage='Please enter the One Time Password Sent to your Email.'
          OTPLabelMessage='One Time Password for Email'
          value1={localStorage.getItem('invoiceEmail')}
        />
      )
    }
    else {
      return null;
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    const phoneAreaCodes = ['+91', '+92', '+93'];
    return (
      <form onSubmit={handleSubmit(registerSubmit)} noValidate autoComplete='off'>
        <div className="row around-xs" style={{ height: '100vh', backgroundColor: '#009688' }}>
          <div className="card-align col-xs-12 col-sm-9 col-md-6 col-lg-6">
            <RenderLogo color='#FFF'/>
            <Card className="card-container">
              <CardHeader
                title="Create an account"
                className='card-title'>
              </CardHeader>
              <CardText >
                <RenderTextField name='email' label='Email' type='text' />
                <RenderTextField name='password' label='Password' type='password' />
                <RenderTextField name='mobile' label='Mobile Number' type='text' />

                <div className="link-item">
                  <span>
                    By clicking, you agree to our
                  </span>
                  <FlatButton
                    label="License Agreement."
                    style={{ fontSize: '80%' }}
                    secondary={true}
                    onClick={this.openLicenseAgreement}                    
                  />
                </div>

              </CardText>
              <CardActions >
                <div className="row" style={{ marginLeft: -16, marginRight: -8, marginTop: -16, marginBottom: 16, fontSize: "80%" }}>
                  <div className="col-xs-6 col-sm-4" >
                    <FlatButton
                      label="Back to sign in"
                      secondary={true}
                      onClick={this.redirectSignin}
                      style={{ fontSize: '80%' }} />
                  </div>
                  <div className="col-xs-6 col-sm-8">
                    <RaisedButton
                      label="Sign Up"
                      disabled={pristine || submitting || !valid }
                      type='submit'
                      fullWidth={true}
                      secondary={true}
                    />
                  </div>
                </div>
              </CardActions>
            </Card>
          </div>
          {this.renderEmailOTPContent()}
          {this.renderMobileOTPContent()}
           {this.renderLicenceAgreement()}
        </div>
      </form>
    )
  }
}

function onMobileOTPshowClick(values, dispatch) {
  localStorage.setItem('invoiceMobile', values.mobile);
  localStorage.setItem('invoiceEmail', values.email);
  dispatch(RegisterAction.setMobileOTPDialogShow(true));
}

function onEmailOTPshowClick(values, dispatch) {
  localStorage.setItem('invoiceMobile', values.mobile);
  localStorage.setItem('invoiceEmail', values.email);
  dispatch(RegisterAction.setEmailOTPDialogShow(true));
}

function registerSubmit(values, dispatch) {
  localStorage.setItem('invoiceMobile', values.mobile);
  localStorage.setItem('invoiceEmail', values.email);
  sessionStorage.setItem('invoicePassword', values.password);
  dispatch(RegisterAction.setMobileOTPDialogShow(true));
  //dispatch(RegisterAction.requestRegisterDetails(values));
}

export default RegisterAccountScreen = reduxForm({
  form: 'loginUserForm',
  validate,
  registerSubmit,
  onMobileOTPshowClick,
  onEmailOTPshowClick
})(RegisterAccountScreen);

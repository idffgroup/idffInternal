import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm, SubmissionError } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RenderTextField from '../common/RenderTextField';

import * as CommonActions from "../../redux/common/actions";
import * as ForgotPasswordActions from "../../redux/forgotpassword/actions";
import ForgotPasswordNewPassword from './ForgotPasswordNewPassword';

export default class ForgotPasswordOTPEnter extends Component {

  constructor(props) {
    super(props);
      this.handleResend = this.handleResend.bind(this);
      this.handleContinue = this.handleContinue.bind(this);
      this.validate = this.validate.bind(this);
    }

  handleResend(values, dispatch) {
    dispatch(ForgotPasswordActions.requestForgotOtpResend(this.props.forgotPassword));
  }

  validate(values) {
    const errors = {}
    let otpCode = values['otpCode'];
    if (!otpCode) {
      errors.otpCode = 'Required';
    }
    if (errors.otpCode) {
      throw new SubmissionError(errors);
    }
  }

  handleContinue(values, dispatch) {
    this.validate(values);
    const data = {};
    data.otpId = this.props.forgotPassword.otpId;
    data.otpCode = values.otpCode;
    if (data.otpCode && data.otpCode != '') {
      dispatch(ForgotPasswordActions.requestForgotOtpVerify(this.props.forgotPassword));
    } else {
      dispatch(CommonActions.toastEvent('Please enter valid OTP code.', true));
    }
  }

  renderContent() {
    let cardTitle = this.props.forgotPassword.communicationType === 'email' ? 'Check your email' : 'Check your phone';
    let cardSubTitle = 'We sent OTP to your ' + this.props.forgotPassword.communicationType + ' ' + this.props.forgotPassword.otpId;
    if (!this.props.forgotPassword.otpEnterContinueClicked) {
      return (
        <Card className="card-container">
          <CardHeader title={cardTitle} style={{marginBottom: -45}}/>
          <CardText >
            <RenderTextField name='otpCode' label='Enter the code' type='text' />
          </CardText>
          <CardActions>
            <div className="row middle-xs" style={{marginRight:-8, marginLeft: -16, fontSize: "80%"}}>
              <div className=" col-xs-6 col-sm-4">
                <span >
                  <FlatButton
                    label="Resend OTP"
                    secondary={true}
                    onClick={this.props.handleSubmit(this.handleResend)}
                  />
                </span>
            </div>
            <div className=" col-xs-6 col-sm-8 ">
                <RaisedButton
                  label="Continue"
                  onClick={this.props.handleSubmit(this.handleContinue)}
                  fullWidth={true}
                  secondary={true}
                />
              </div>
            </div>
          </CardActions>
        </Card>
      )
    }
    else {
      return (
        <ForgotPasswordNewPassword
          handleSubmit={this.props.handleSubmit}
          forgotPassword={this.props.forgotPassword}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}


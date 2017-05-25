import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { formValueSelector, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import RenderTextField from '../common/RenderTextField';
import * as ForgotPasswordActions from "../../redux/forgotpassword/actions";
import ForgotPasswordOTPEnter from './ForgotPasswordOTPEnter';

export default class ForgotPasswordPhoneOrEmail extends Component {

  constructor(props, context) {
    super(props, context);
    this.redirectLogIn = this.redirectLogIn.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.validate = this.validate.bind(this);
  }
  redirectLogIn() {
    this.props.router.push('/login');
  }

  validate(values) {
    const errors = {}
    let otpId = values['otpId'];
    if (!otpId) {
      errors.otpId = 'Required';
    }
    if (errors.otpId) {
      throw new SubmissionError(errors);
    }
  }

  handleContinue(values, dispatch) {
    this.validate(values);   
    const data = {};
    data.communicationType = 'mobile';
    data.otpId = values.otpId;
    if (isNaN(data.otpId)) {
      data.communicationType = 'email';
    }
    if (data.otpId && data.otpId != '') {
      data.otpId = data.otpId.trim();
      //this.props.forgotPassword.otpId = data.otpId;            
      dispatch(ForgotPasswordActions.requestForgotOtpInit(data));          
    } else {
      dispatch(CommonActions.toastEvent('Please enter valid email or mobile.', true));
    }
  }

  renderContent() {
    if (!this.props.forgotPassword.phoneoremailContinueClicked) {
      return (
        <Card className="card-container">
          <CardHeader title="Get Help Signing into RightInvoices" style={{marginBottom: -45}}/>
          <CardText >
            <RenderTextField name='otpId' label='Enter your phone number or email' type='text' />
          </CardText>
          <CardActions>
            <div className="row middle-xs" style={{marginLeft: -16, marginRight:-8, fontSize: "80%"}}>
              <div className=" col-xs-6 col-sm-4">
                <span  >
                  <FlatButton
                    label="Back to Sign In"
                    secondary={true}
                    onClick={this.redirectLogIn}
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
        <ForgotPasswordOTPEnter
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




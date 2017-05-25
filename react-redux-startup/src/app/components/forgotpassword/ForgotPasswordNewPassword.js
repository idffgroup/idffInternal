import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm, SubmissionError } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import RenderTextField from '../common/RenderTextField';
import * as CommonActions from "../../redux/common/actions";
import * as ForgotPasswordActions from "../../redux/forgotpassword/actions";

export default class ForgotPasswordNewPassword extends Component {

  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate(values) {
    const errors = {}
    let otpId = values['otpId'];
    if (!otpId) {
      errors.otpId = 'Required';
    }

    let password = values['password'];
    if (!password) {
      errors.password = 'Required';
    }

    if (errors.otpId || errors.password) {
      throw new SubmissionError(errors);
    }
  }

  handleReset(values, dispatch) {
    this.validate(values);
    const data = {};
    data.otpId = values.otpId;
    data.password = values.password;

    if (data.otpId && data.otpId != '') {
      if (data.otpId != this.props.forgotPassword.otpId) {
        dispatch(CommonActions.toastEvent('user id is not match with otp verify id.', true));
      } else if (!data.password || data.password == '') {
        dispatch(CommonActions.toastEvent('Please enter password.', true));
      } else {
        this.props.forgotPassword.password = data.password;
        dispatch(ForgotPasswordActions.requestChangePassword(this.props.forgotPassword));
        dispatch(CommonActions.toastEvent('Reset Password successfully completed.', true));
      }
    } else {
      dispatch(CommonActions.toastEvent('Please enter valid email or mobile.', true));
    }
  }

  render() {
    return (
      <Card className="card-container">
        <CardHeader title="Enter a new password" style={{marginBottom: -45}}/>
        <CardText >
          <RenderTextField name='otpId' label='UserId' type='text' />
          <RenderTextField name='password' label='Password' type='password' />
        </CardText>
        <CardActions style={{ marginLeft: 16, marginTop: 8, marginRight: 7 }}>
          <div className="row middle-xs">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <RaisedButton
                label="Reset Password"
                onClick={this.props.handleSubmit(this.handleReset)}
                fullWidth={true}
                secondary={true}
                style={{ width: '342px', position: 'relative', left: 132 }}
              />
            </div>
          </div>
        </CardActions>
      </Card>
    )
  }
}

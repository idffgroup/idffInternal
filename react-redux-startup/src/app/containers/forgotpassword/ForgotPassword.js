import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginFormForgotComponent from "../../components/forgotpassword/ForgotPasswordComponent";
import ForgotPasswordPhoneOrEmail from "../../components/forgotpassword/ForgotPasswordPhoneOrEmail";
import ForgotPasswordOTPEnter from "../../components/forgotpassword/ForgotPasswordOTPEnter";
import ForgotPasswordNewPassword from "../../components/forgotpassword/ForgotPasswordNewPassword";
import * as ForgotPasswordActions from "../../redux/forgotpassword/actions";

class LoginFormForgotPassword extends Component {

  constructor(props) {
    super(props);
   // this.renderScreen = this.renderScreen.bind(this);
  }

  componentWillUnmount() {
    this.props.dispatch(ForgotPasswordActions.setPhoneorEmailContinueClicked(false));
    this.props.dispatch(ForgotPasswordActions.setOTPEnterContinueClicked(false));
  }

  render() {
    return (
      <div>     
        <LoginFormForgotComponent
          dispatch={this.props.dispatch}
          router={this.props.router}
          forgotPassword={this.props.forgotPassword}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(LoginFormForgotPassword);

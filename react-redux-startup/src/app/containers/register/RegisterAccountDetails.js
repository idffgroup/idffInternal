import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import RegisterAccountScreen from "../../components/register/RegisterAccountScreen";
import RegisterAccountContactDetails from "../../components/register/RegisterAccountContactDetails";
import RegisterAccountAddressDetails from "../../components/register/RegisterAccountAddressDetails";
import RegisterAccountBusinessDetails from "../../components/register/RegisterAccountBusinessDetails";
import * as LoginAction from "../../redux/loginform/actions";

class RegisterAccountDetails extends Component {

  constructor(props, context) {
    super(props, context);
  }

  reloadComponent() {
    switch (this.props.register.registerAccountState) {     
      case 'contactDetails':
        return (
          <RegisterAccountContactDetails
            dispatch={this.props.dispatch}
            loginLoader={this.props.loginform.loading}
            router={this.props.router}
            mobileOTPType={this.props.register.mobileOTPType}
            emailOTPType={this.props.register.emailOTPType}
            OTPVerified={this.props.register.OTPVerified}
            register={this.props.register}
            profile={this.props.profile}
          />
        );
      case 'addressDetails':
        return (
          <RegisterAccountAddressDetails
            dispatch={this.props.dispatch}
            loginLoader={this.props.loginform.loading}
            router={this.props.router}
            mobileOTPType={this.props.register.mobileOTPType}
            emailOTPType={this.props.register.emailOTPType}
            OTPVerified={this.props.register.OTPVerified}
            register={this.props.register}
          />
        );
      case 'businessDetails':
        return (
          <RegisterAccountBusinessDetails
            dispatch={this.props.dispatch}
            loginLoader={this.props.loginform.loading}
            router={this.props.router}
            mobileOTPType={this.props.register.mobileOTPType}
            emailOTPType={this.props.register.emailOTPType}
            OTPVerified={this.props.register.OTPVerified}
            register={this.props.register}
          />
        )
      default:
        return;
    }
  }

  render() {
    return (
      <div style={{ marginBottom: 30 }}>
        {this.reloadComponent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(RegisterAccountDetails);

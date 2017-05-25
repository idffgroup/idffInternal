import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import RegisterAccountScreen from "../../components/register/RegisterAccountScreen";
import RegisterAccountContactDetails from "../../components/register/RegisterAccountContactDetails";
import RegisterAccountAddressDetails from "../../components/register/RegisterAccountAddressDetails";
import * as LoginAction from "../../redux/loginform/actions";

class RegisterAccount extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  handleLogin() {
    this.context.router.push('/login');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo && nextProps.redirectTo != null) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    return (
      <div style={{ marginBottom: 30 }}>
        <RegisterAccountScreen
          dispatch={this.props.dispatch}
          licenceAgreement = {this.props.licenceAgreement}
          loginLoader={this.props.loginform.loading}
          router={this.props.router}
          mobileOTPType={this.props.register.mobileOTPType}
          emailOTPType={this.props.register.emailOTPType}
          OTPVerified={this.props.register.OTPVerified}
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

export default connect(mapStateToProps)(RegisterAccount);

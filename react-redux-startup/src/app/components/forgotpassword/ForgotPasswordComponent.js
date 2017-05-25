import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import Loader from 'react-loader';

import { Image } from 'material-ui-image'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import RenderTextField from '../common/RenderTextField';
import RenderCheckboxField from '../common/RenderCheckboxField';
import RenderLogo from '../common/RenderLogo';
import Icon from '../../constants/Icons';
import { palette } from '../../constants/styles';
import ForgotPasswordPhoneOrEmail from './ForgotPasswordPhoneOrEmail';

class LoginFormForgotComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.redirectLogIn = this.redirectLogIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {  
    if (nextProps.loginSuccess) {
      this.props.router.push('/menu');
    }
  }

  renderLoading() {
    return this.props.loginLoader ? (
      <CircularProgress size={60} thickness={7} />
    ) : null;
  }

  redirectLogIn() {
    this.props.router.push('/login');
  }

  componentDidMount() {
    this.props.initialize(this.props.forgotPassword);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    return (
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <div className="row around-xs" style={{height: '100vh', backgroundColor: '#009688'}}>
          <div className="card-align col-xs-12 col-sm-9 col-md-6 col-lg-6">
            <RenderLogo />
            <ForgotPasswordPhoneOrEmail
              handleSubmit={handleSubmit}
              forgotPassword={this.props.forgotPassword}    
              router={this.props.router}          
             />
            {this.renderLoading()}
          </div>
        </div>
      </form>
    )
  }
}

export default LoginFormForgotComponent = reduxForm({
  form: 'LoginFormForgotComponent'
})(LoginFormForgotComponent);

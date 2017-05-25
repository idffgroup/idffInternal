export const LOGIN = 'LOGIN';
export const LOGIN_RECEIVED = 'LOGIN_RECEIVED';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const TODAY_CLASSES = 'TODAY_CLASSES';
export const MONTH_CLASSES = 'MONTH_CLASSES';
export const CUSTOM_CLASSES = 'CUSTOM_CLASSES';



export const CLASS_TIMININGS_RECEIVED = 'CLASS_TIMININGS_RECEIVED';
export const CLASS_TIMININGS_ERROR = 'CLASS_TIMININGS_ERROR';

export const MONTH_PAYMENTS = 'MONTH_PAYMENTS';
export const CUSTOM_PAYMENTS = 'CUSTOM_PAYMENTS';


export const STUDENT_PAYMENTS_RECEIVED ='STUDENT_PAYMENTS_RECEIVED';
export const STUDENT_PAYMENTS_ERROR ='STUDENT_PAYMENTS_ERROR';

export const MONTH_TEACHERPAYMENTS = 'MONTH_TEACHERPAYMENTS';
export const CUSTOM_TEACHERPAYMENTS = 'CUSTOM_TEACHERPAYMENTS';


export const TEACHER_PAYMENTS_RECEIVED ='TEACHER_PAYMENTS_RECEIVED';
export const TEACHER_PAYMENTS_ERROR ='TEACHER_PAYMENTS_ERROR';





    import React, { Component, PropTypes } from 'react';
import {
  Field,
  reduxForm
} from 'redux-form';

import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

class LoginFormComponent extends Component {

  /*  static propTypes = {
      onSubmit: PropTypes.func.isRequired,
      loginUser: PropTypes.object.isRequired
    };*/

  constructor(props) {
    super(props);
  }

  /*  renderTextField({ input, label, meta: { touched, error }, ...custom }) {
      return (
        <TextField hintText={label}
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          {...custom}
        />
      )
    }*/

  handleSubmit(e) {
    e.preventDefault();
    const login = {};
    login.email = "abcd";
    login.password = "1234";

    this.props.onSubmit(login);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="block" >
        <div className="centered" >
          <form action="#" >
            <Subheader>Login Page</Subheader>
            <div>
              <Field name="email" component={renderTextField} label="Email" />
            </div>
            <div>
              <Field name="password" component={renderTextField} label="Password" />
            </div>
            <RaisedButton label="Submit" primary={true} disabled={pristine || submitting} onClick={(e) => this.handleSubmit(e)} />
          </form>
        </div>
      </div>

    )
  }
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const validate = values => {
  const errors = {}  
  let email = values['email'];

  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }

  let password = values['password'];
  if (!password) {
    errors.password = 'Required';
  }
  return errors
}

export default LoginFormComponent = reduxForm({
  form: 'loginUserForm',
  validate
})(LoginFormComponent);




//export default LoginForm;










import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginFormComponent from "../components/apex/LoginFormComponent";
import * as LoginActions from "../redux/loginform/actions";

class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  handleLogin() {
    this.context.router.push('/main');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo && nextProps.redirectTo != null) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }
  render() {
    return (
      <div>
        <LoginFormComponent
          loginUser={this.props.loginUser}
          onSubmit={this.props.onSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (loginUser) => { dispatch(LoginAction.requestLoginDetails(loginUser)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

    var options = {
      lines: 13,
      length: 10,
      width: 10,
      radius: 10,
      scale: 1.00,
      corners: 1,
      color: '#000',
      opacity: 0.25,
      rotate: 0,
      direction: 1,
      speed: 1,
      trail: 60,
      fps: 20,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      shadow: false,
      hwaccel: false,
      position: 'absolute'
    };


    /*renderOTPContent() {
    if(this.state.showOTP) {
      return (
        <div>         
          <CardText style={{position: 'relative', bottom: 5, left: 2, fontSize: '80%', fontStyle: 'normal', fontWeight: '500', paddingLeft: 32, paddingTop: 10, marginRight: 6, paddingBottom: 0 }}>
            Please enter the One Time Password Sent to your mobile.
          <RenderTextField name='onetimeOTP' label='One Time Password' type='text' />
          </CardText>
        </div>
      )
    }
      else {
        return null;
      }
  }*/

  /*  componentDidMount() {      
      this.setState({
        showOTP: false
      })
    }*/

    {/*        <ToastrComponent
          message={this.props.loginform.message}
          open={this.props.common.showToastr}
        />*/}

{/*        <Snackbar
          open={this.props.common.showToastr}
          message={this.props.common.showToastr}
          action="Close"
          autoHideDuration={4000}
        />*/}


                  {/*autoHideDuration={this.state.autoHideDuration}
                   onRequestClose={this.handleRequestClose}
          onActionTouchTap={this.handleActionTouchTap}*/}



                  /*<Switch condition={ } addClass={'someclassname'}>
          <Case value='begin'>
               {this.renderForgotPasswordOTPEnter()}
          </Case>
          <Case value='init'>
            <span>init</span>
          </Case>
          <Case value='validate'>
            {this.renderForgotPasswordOTPEnter()}
          </Case>
          <Case value='end'>
            <span>end</span>
          </Case>
          <Default>
            <span>Nothing!</span>
          </Default>
        </Switch>*/

        /*ForgotPasswordNewPassword = reduxForm({
  form: 'forgotPasswordNewPassword',
})(ForgotPasswordNewPassword);

const selector = formValueSelector('forgotPasswordNewPassword');
ForgotPasswordNewPassword = connect(
  state => {
    const data = {};
    //data.communicationType = 'mobile';
    data.otpId = selector(state, 'otpId');
    data.password = selector(state, 'password');
    return { data }
  }
)(ForgotPasswordNewPassword)

ForgotPasswordNewPassword = connect(
  state => ({
    initialValues: state.forgotPassword
  }),
)(ForgotPasswordNewPassword)
export default ForgotPasswordNewPassword;*/



/*ForgotPasswordOTPEnter = reduxForm({
  form: 'forgotPasswordOTPEnter',
})(ForgotPasswordOTPEnter);

const selector = formValueSelector('forgotPasswordOTPEnter');
ForgotPasswordOTPEnter = connect(
  state => {
    const data = {};
    //data.communicationType = 'mobile';
    data.otpCode = selector(state, 'otpCode');
    return { data }
  }
)(ForgotPasswordOTPEnter)
export default ForgotPasswordOTPEnter;*/


/*export default ForgotPasswordPhoneOrEmail = reduxForm({
  form: 'forgotPasswordPhoneOrEmail',
  initialValues:this.props.forgotPassword
})(ForgotPasswordPhoneOrEmail);*/





/*const selector = formValueSelector('forgotPasswordPhoneOrEmail');
ForgotPasswordPhoneOrEmail = connect(
  state => {
    const data = {};
    data.communicationType = 'mobile';
    data.otpId = selector(state, 'otpId');
    if (isNaN(data.otpId)) {
      data.communicationType = 'email';
    }
    return { data }
  }
)(ForgotPasswordPhoneOrEmail)
export default ForgotPasswordPhoneOrEmail;*/




/*import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import * as RegisterAction from "../../redux/register/actions";
import RenderTextField from '../common/RenderTextField';

export default class LoginFormForgotPasswordId extends React.Component {

  constructor(props) {
    super(props);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
  };

  render() {
    const actions = [
      <FlatButton
        label={this.props.button1}
        onTouchTap={this.handleClose}
        secondary={true}
      />,
      <FlatButton
        label={this.props.button2}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        secondary={true}
      />,
    ];

    return (
      <div>
      
        <Dialog
          title="ForGot Password"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose} >
          <Card style={{ marginTop: 4, maxHeight: '224px' }}>
            <CardHeader
              title={this.props.OTPType}
              subtitle={this.props.value1}
              actAsExpander={true}
              showExpandableButton={false}
              style={{ paddingBottom: 4 }}
            />
            <CardText style={{ position: 'relative', bottom: 5, left: 2, fontSize: '80%', fontStyle: 'normal', fontWeight: '500' }}>
              {this.props.OTPMessage}
              <RenderTextField name='onetimeOTP' label={this.props.OTPLabelMessage} type='text' />
            </CardText>
          </Card>
        </Dialog>
      </div>
    );
  }
}
*/

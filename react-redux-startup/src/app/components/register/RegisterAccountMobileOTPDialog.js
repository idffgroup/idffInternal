import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import * as RegisterAction from "../../redux/register/actions";
import RenderTextField from '../common/RenderTextField';

class RegisterAccountMobileOTPDialog extends React.Component {

  constructor(props) {
    super(props);    
    this.onVerify = this.onVerify.bind(this);
    this.onResend = this.onResend.bind(this);
  }
  componentWillMount() {
    const invoiceMobile=  localStorage.getItem('invoiceMobile');
    const invoiceEmail=  localStorage.getItem('invoiceEmail');  
    const reqObj = {
      type: 'register',
      mobile: invoiceMobile,
      email: invoiceEmail
    }
    this.props.dispatch(RegisterAction.requestOtpInit(reqObj));
  }
  handleSubmit(e) {
    e.preventDefault();
  }


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.dispatch(RegisterAction.setEmailOTPDialogShow(false));
    this.props.dispatch(RegisterAction.setMobileOTPDialogShow(false));
    // this.props.dispatch(RegisterAction.setOTPVerified(true));
  };

  onVerify() {
    const onetimeOTP = sessionStorage.getItem('ri-onetimeOTP');
    const invoiceMobile=  localStorage.getItem('invoiceMobile');
    const invoiceEmail=  localStorage.getItem('invoiceEmail');  
    const reqObj = {
      type: 'register',
      mobile: invoiceMobile,
      email: invoiceEmail,
      password: onetimeOTP
    }
    this.props.dispatch(RegisterAction.requestOtpVerify(reqObj));
    /*this.props.dispatch(RegisterAction.requestRegisterDetails(reqObj));*/
  }

  onResend() {
    const invoiceMobile=  localStorage.getItem('invoiceMobile');
    const invoiceEmail=  localStorage.getItem('invoiceEmail');  
    const reqObj = {
      type: 'register',
      mobile: invoiceMobile,
      email: invoiceEmail
    }
    this.props.dispatch(RegisterAction.requestOtpResend(reqObj));
  }


  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    const actions = [
      <FlatButton
        label={this.props.button1}
        onTouchTap={this.onVerify}
        secondary={true}
      />,
      <FlatButton
        label={this.props.button2}
        onTouchTap={this.onResend}
        secondary={true}
      />,
      <FlatButton
        label='Close'
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        secondary={true}
      />,
    ];

    return (
      <div>
        {/*<RaisedButton label="Dialog" onTouchTap={this.handleOpen} />*/}
        {/*<form  noValidate autoComplete='off'>*/}
        <Dialog
          title="One Time Password"
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
        {/*</form>*/}
      </div>
    );
  }
}



const validate = values => {
  const errors = {}
  let onetimeOTP = values['onetimeOTP'];
  if (!onetimeOTP) {
    errors.onetimeOTP = 'Required';
  } else {
    sessionStorage.setItem('ri-onetimeOTP', onetimeOTP);
  }


  return errors
}


export default RegisterAccountMobileOTPDialog = reduxForm({
  form: 'registerAccountMobileOTPDialog',
  validate,
})(RegisterAccountMobileOTPDialog);


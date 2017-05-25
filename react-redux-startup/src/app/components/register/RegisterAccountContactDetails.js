import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import RenderTextField from '../common/RenderTextField';
import RenderLogo from '../common/RenderLogo';
import RenderDropdownTextField from '../common/RenderDropdownTextField';
import { palette } from '../../constants/styles';
import { contactDetailsValidate as validate } from './RegisterAccountValidate';
import * as RegisterAction from "../../redux/register/actions";
import * as ProfileAction from "../../redux/profile/actions";
import {
  redirectEvent
} from '../../redux/common/actions';

class RegisterAccountContactDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentWillMount() {
    if (this.props.profile.accountId == 0 || this.props.profile.accountId == '' || this.props.profile.accountId == null) {
      //this.props.dispatch(ProfileAction.restGetProfileDetails(this.props.profile.accountId));
      this.props.dispatch(redirectEvent('/login'));
    }
  }

  componentDidMount() {
    this.props.initialize(this.props.register);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit(onNextClick)} noValidate autoComplete='off'>
        <div className="row">
          <div className="card-align-md">
            <RenderLogo color='#009688' />
            <Stepper activeStep={this.state.stepIndex}>
              <Step>
                <StepLabel>Contact Details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Business Details</StepLabel>
              </Step>
            </Stepper>
            <div className='card-container'>
              <div className="row" >
                <div className="col-xs-12 col-sm-12 col-md-8">

                  <div className="row">
                    <div className="col-xs-12">
                      <RenderTextField name='businessname' label='Business Name' type='text' />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <RenderTextField name='firstname' label='First Name' type='text' />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <RenderTextField name='lastname' label='Last Name' type='text' />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <RenderTextField name='pan' label='PAN or TAN' type='text' />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <RenderTextField name='mobile' label='Mobile' type='text' disabled={true} />
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: 40 }}>
                    <div className="col-xs-12 col-sm-6">
                      <RenderTextField name='email' label='Email' type='text' disabled={true} />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <RenderTextField name='website' label='Website' type='text' />
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                  <div className="row center-xs  middle-xs" style={{ height: '200px' }}>
                    <RenderLogo color='#009688' />
                  </div>

                </div>

              </div>

            </div>
            <div className="row ">
              <div className="card-action col-xs-offset-9 col-xs-3">
                <RaisedButton
                  label="Continue"
                  type='submit'
                  secondary={true}
                  fullWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}


function onNextClick(values, dispatch) {
  dispatch(RegisterAction.registerContactDetails(values));
  dispatch(RegisterAction.setRegisterAccountState('addressDetails'));
}

export default RegisterAccountContactDetails = reduxForm({
  form: 'RegisterAccountContactDetails',
  validate,
  onNextClick
})(RegisterAccountContactDetails);

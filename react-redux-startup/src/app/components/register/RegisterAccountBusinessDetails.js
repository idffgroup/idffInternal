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
import RenderSelectField from '../common/RenderSelectField';
import RenderLogo from '../common/RenderLogo';
import RenderDropdownTextField from '../common/RenderDropdownTextField';
import { palette } from '../../constants/styles';
import { businessDetailsValidate as validate } from './RegisterAccountValidate';
import * as RegisterAction from "../../redux/register/actions";

class RegisterAccountBusinessDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 2,
    };
    this.onBackClick = this.onBackClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.initialize(this.props.register);
  }

  onBackClick(values, dispatch) {
    dispatch(RegisterAction.registerBusinessDetails(values));
    dispatch(RegisterAction.setRegisterAccountState('addressDetails'));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    //const commercialTypes = ['General', 'Pharmacy', 'Retail Grocery'];
    const commercialTypes = [
      {
        id: 'general',
        name: 'General'
      },
      {
        id: 'pharmacy',
        name: 'Pharmacy'
      },
      {
        id: 'retailgrocery',
        name: 'Retail Grocery'
      }
    ]
    return (
      <form onSubmit={handleSubmit(onFinishClick)} noValidate autoComplete='off'>
        <div className="row ">
          <div className="card-align-md">
            <RenderLogo />
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


              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <RenderSelectField name='commercialtype' label='Commercial Type' type='text' menuItems={commercialTypes} />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <RenderTextField name='currency' label='Currency' type='text' />
                </div>
              </div>

            </div>

            <div className="row">
              <div className="card-action col-xs-offset-9 col-xs-3">
                <FlatButton
                  label="Back"
                  secondary={true}
                  style={{ fontSize: '80%' }}
                  onClick={handleSubmit(this.onBackClick)}
                />

                <RaisedButton
                  label="Finish"
                  type='submit'
                  secondary={true}
                />
              </div>
            </div>
          </div>
        </div>
      </form >
    )
  }
}

function onFinishClick(values, dispatch) {
  dispatch(RegisterAction.registerBusinessDetails(values));
}

export default RegisterAccountBusinessDetails = reduxForm({
  form: 'RegisterAccountBusinessDetails',
  validate,
  onFinishClick
})(RegisterAccountBusinessDetails);

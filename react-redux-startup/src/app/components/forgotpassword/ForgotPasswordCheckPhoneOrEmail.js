import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import { Image } from 'material-ui-image'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import RenderTextField from '../../common/RenderTextField';
import RenderCheckboxField from '../../common/RenderCheckboxField';
import Icon from '../../../constants/Icons';
import { palette } from '../../../constants/styles';
import ForgotPasswordOTPEnter from './ForgotPasswordOTPEnter';


export default class ForgotPasswordCheckPhoneOrEmail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isContinueClicked: false,
      isPhoneRadioButtonSelected: false      
    };
    this.radiButtonChange = this.radiButtonChange.bind(this);
  }

  radiButtonChange(e, value) {   
    if(value == 'email') {
      this.setState({
        isPhoneRadioButtonSelected: false
      })
    }
    else {
      this.setState({
        isPhoneRadioButtonSelected: true
      })
    }     
  }


 renderPhoneOrEmailCheckBoxScreen() {
    if (!this.state.isContinueClicked) {
      return (
        <Card
          className="box"
          style={{ padding: 8, maxWidth: 670, width: 537 }}>
          >
          <CardHeader
            title="Let us get you signed in"
            className='card-title'
            subtitle='Select an option to reset your password'
            subtitleStyle={{ marginTop: 6, fontSize: 12 }}
          >
          </CardHeader>
          <CardText >
            <RadioButtonGroup name="phoneoremail" defaultSelected="phone" onChange={this.radiButtonChange}>
              <RadioButton
                value="phone"
                label="Get a code texted to +91 8050684142"
                style={styles.radioButton}
              />
              <RadioButton
                value="email"
                label="Send an email verification link to your email: rajesh.uppara@gmail.com"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </CardText>
          <CardActions style={{ marginLeft: 16, marginTop: 8, marginRight: 7 }}>
            <div className="row middle-xs">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <RaisedButton
                  label="Continue"
                  onClick={() => this.setState({ isContinueClicked: true })}
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
    else {
      return (
        <ForgotPasswordOTPEnter
          isPhoneRadioButtonSelected={this.state.isPhoneRadioButtonSelected} 
        />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderPhoneOrEmailCheckBoxScreen()}
      </div>
    )
  }
}

const styles = {
  radioButton: {
    marginBottom: 16,
    marginTop: 10
  }
};
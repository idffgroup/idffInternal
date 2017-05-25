import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { palette } from '../../constants/styles';

export default class RenderTextField extends React.Component {

  constructor(props) {
    super(props);
  }

  renderTextField({ input, label, type, disabled, meta: { touched, error }, ...custom }) {
    return (
      <TextField
        floatingLabelText={label}
        errorText={touched && error}
        type={type}
        {...input}
        {...custom}
        floatingLabelStyle={{ fontSize: 14, fontWeight: 400 }}
        floatingLabelFocusStyle={{ fontSize: 14 }}
        underlineShow={true}
        style={{ width: '100%', paddingLeft: 0, marginBottom: '2rem' }}
        underlineFocusStyle={{ borderBottomWidth: '2px'}}
        disabled={disabled}
      />
    )
  }

  render() {
    return (
        <div style={{ height: 70 }}>
          <Field name={this.props.name} component={this.renderTextField} label={this.props.label} type={this.props.type} disabled={this.props.disabled}/>
        </div>
    );
  }
}
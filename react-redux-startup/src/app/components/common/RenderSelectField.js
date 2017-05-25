import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { palette } from '../../constants/styles';

export default class RenderSelectField extends React.Component {

  constructor(props) {
    super(props);
    this.renderSelectField = this.renderSelectField.bind(this);
  }

  renderSelectField({ input, label, menuItems, value, meta: { touched, error } }, ...custom) {
    return (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        floatingLabelStyle={{ fontSize: 14, fontWeight: 400 }}
        floatingLabelFocusStyle={{ fontSize: 14 }}
        onChange={(event, index, value) => { input.onChange(value); }}
        style={{ width: '100%' }}>
        {menuItems.map((item, index) => {
          return (
            <MenuItem value={item.id} primaryText={item.name} />
          )
        })}
      </SelectField>
    )
  }

  render() {
    return (
      <div style={{ height: 70 }}>
        <Field
          name={this.props.name}
          component={this.renderSelectField}
          label={this.props.label}
          menuItems={this.props.menuItems}
        >
        </Field>
      </div>
    );
  }
}


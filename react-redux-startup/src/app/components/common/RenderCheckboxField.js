import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Checkbox from 'material-ui/Checkbox';
import { palette } from '../../constants/styles';

export default class RenderCheckboxField extends React.Component {

    constructor(props) {
        super(props);
    }

    renderCheckbox({ input, label, meta: { touched, error }, ...custom }) {
        return (
            <Checkbox
                label={label}
                style={{ marginLeft: 5, top: 16 }}
            />
        )
    }

    render() {
        return (
            <div>
                <Field name={this.props.name} component={this.renderCheckbox} label={this.props.label} />
            </div>
        );
    }
}
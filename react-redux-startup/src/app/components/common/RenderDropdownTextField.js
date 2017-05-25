import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { palette } from '../../constants/styles';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class RenderDropdownTextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    renderTextField({ input, label, type, meta: { touched, error }, ...custom }) {
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
                underlineFocusStyle={{borderBottomWidth: '2px' }}
            />
        )
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div style={{ height: 70, display: 'flex', flexDirection: 'row' }}>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    underlineStyle={{ width: 80 }}
                    iconStyle={{ marginBottom: 40 }}
                    className='register-dropdown'
                    style={{ marginTop: 16, position: 'relative', right: 23 }}
                >
                    {this.props.menuItems.map((item, index) => (
                        <MenuItem value={index+1} primaryText={item} />
                    ))}
                                    </DropDownMenu>
                <Field name="mobile" component={this.renderTextField} label="Mobile Number"  type='number'/>
            </div>
        );
    }
}
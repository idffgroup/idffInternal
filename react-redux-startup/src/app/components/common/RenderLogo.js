import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { palette } from '../../constants/styles';
import Icon from '../../constants/Icons';

export default class RenderLogo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
          <div style={{marginLeft: -16}}>
            <Icon icon='logo-icon' size={70} color={this.props.color} />
          </div>
        </div>
    );
  }
}
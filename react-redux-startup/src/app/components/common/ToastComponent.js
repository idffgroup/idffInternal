import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import * as CommonAction from "../../redux/common/actions";

export default class ToastComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 9999,
      message: this.props.message,
      open: false,
    };
    this.handleActionTouchTap = this.handleActionTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open,
        message: nextProps.message
      });
  }

  handleActionTouchTap = () => {
    this.props.dispatch(CommonAction.toastEvent('', false));
  };

  handleRequestClose = () => {
    this.props.dispatch(CommonAction.toastEvent('', false));
  };

  render() {
    return (
      <div>        
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="Close"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
           onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
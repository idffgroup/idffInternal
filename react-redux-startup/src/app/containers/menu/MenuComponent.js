import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import * as LoginActions from "../../redux/loginform/actions";

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  componentWillMount() {    
    //if (!this.props.loginform.loginSuccess)
    //  this.props.dispatch(LoginActions.isUserAuthenticated(this.props.dispatch));
  }

  componentDidMount() {    
    if (!this.props.loginform.loginSuccess) {
      //this.props.router.push('/login');
    }
  }

  render() {
    return (
      <div>
        <header>
          <AppBar title="Right Invoice" iconClassNameRight="muidocs-icon-navigation-expand-more" onTouchTap={this.handleToggle} />
        </header>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}>
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(MenuComponent);
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import * as CommonAction from "../../redux/common/actions";

export default class LoaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
   // this.props.dispatch(CommonAction.showLoader(true));
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show,
      });
  }

  render() {
    return (
      <div style={{ display : (this.props.show ? 'block': 'none') }}> 
          <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '999999999',
              backgroundColor: '#ccc',
              opacity: '0.8'
          }}>       
            <CircularProgress size={40} thickness={5} />
          </div>
      </div>
    );
  }
}
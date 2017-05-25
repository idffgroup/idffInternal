import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import HeaderComponent from "../components/apex/HeaderComponent";
import ToastComponent from "../components/common/ToastComponent";
import LoaderComponent from "../components/common/LoaderComponent";


class Main extends React.Component {

    constructor(props) {
        super(props);        
        this.renderToast = this.renderToast.bind(this);
        this.renderLoader = this.renderLoader.bind(this);
    }
  componentWillReceiveProps(nextProps) {
    if(nextProps.common.redirectUrl && nextProps.common.redirectUrl != null) {
      this.props.router.push(nextProps.common.redirectUrl);
      nextProps.common.redirectUrl  = null;
    }
  }
    renderToast() {
        return (
            <ToastComponent
                message={this.props.common.message}
                open={this.props.common.showToast}
                dispatch={this.props.dispatch}
            />
        );
    }
    renderLoader() {
        return (
            <LoaderComponent
                show={this.props.common.showLoader}
                dispatch={this.props.dispatch}
            />
        );
    }

    render() {
        return (
            <div style={{ flex: 1, height: '100vh' }}>
                {/*<HeaderComponent />*/}
                <div style={{}}>
                    {this.props.children}
                    {this.renderToast()}
                </div>
                {this.renderLoader()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
};

export default connect(mapStateToProps)(Main);
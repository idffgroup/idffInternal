import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
    return (
        <div>
        <div> Home Page </div>
        <Link to="/login">Login</Link> 
        <Link to="/register">Register</Link> 
        </div>
    )}
}


const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(Home);
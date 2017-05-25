/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      speed: 10
    }
  }

  componentDidMount() {
   
    const rootRef = firebase.database().ref().child('react');
    
    const speedRef = rootRef.child('speed');
    rootRef.on('value', snap => {
      console.log("hjbghjb" + JSON.stringify(snap.val()));
      this.setState({
        speed: snap.val().speed
      })
    })
  }

  render() {
    return (
      <div className="App">
        
        <input id="username" type="text" placeholder="Name" /><br />
        <input id="text" type="text" placeholder="Message" /><br />
        <button id="post">Post</button><br />
        <div id="results"></div>
      </div>
    );
  }
}

export default App;
*/
import React, { Component } from 'react';
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
     var rootRef = firebase.database().ref();
    rootRef.on('child_added', function (snapshot) {
      var msg = snapshot.val();

      var msgUsernameElement = document.createElement("b");
      msgUsernameElement.textContent = msg.username;

      var msgTextElement = document.createElement("p");
      msgTextElement.textContent = msg.text;

      var msgElement = document.createElement("div");
      msgElement.appendChild(msgUsernameElement);
      msgElement.appendChild(msgTextElement);

      msgElement.className = "msg";
      document.getElementById("results").appendChild(msgElement);
    });
  }

  setChatData() {
    var usernameInput = document.querySelector('#username');
    var textInput = document.querySelector('#text');
    var postButton = document.querySelector('#post');

    var msgUser = usernameInput.value;
    var msgText = textInput.value;
    var rootRef = firebase.database().ref();
    rootRef.push({ username: msgUser, text: msgText });
    textInput.value = "";
  }

  render() {
    return (
      <div className="App">
        {/*<h1>{this.state.speed}</h1>*/}
        <input id="username" type="text" placeholder="Name" /><br />
        <input id="text" type="text" placeholder="Message" /><br />
        <button id="post" onClick={this.setChatData}>Post</button><br />
        <div id="results"></div>
      </div>
    );
  }
}

export default App;

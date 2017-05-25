import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCK9IZ5klU7mXpVJvehL882GC6Vp1A--50",
    authDomain: "rajesh-sample1.firebaseapp.com",
    databaseURL: "https://rajesh-sample1.firebaseio.com",
    projectId: "rajesh-sample1",
    storageBucket: "rajesh-sample1.appspot.com",
    messagingSenderId: "904117369358"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

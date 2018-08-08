import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import Tasks from './components/Tasks'
import './App.css';
import './fontawesome/css/all.css';

// name? orlog

class App extends Component {
  render() {

    return (
      <div className="App">
      <Tasks />
      </div>
    );
  }
}

export default App;

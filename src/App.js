import React, { Component } from 'react';
import logo from './logo.svg';
import Tasks from './components/Tasks'
import './App.css';

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

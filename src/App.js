import React, { Component } from 'react';
import Users from './components/User';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>GitHub Users</h2>
          <Users />
      </div>
    );
  }
}

export default App;

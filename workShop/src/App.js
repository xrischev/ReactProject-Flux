import React, { Component } from 'react';
import './App.css';
import Routes from './components/common/Routes'
import Navbar from './components/common/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;

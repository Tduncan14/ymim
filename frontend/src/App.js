import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row page-contents">
          <p>This is a sample component that currently lives at the root of our application.</p>
        </div>
      </div>
    );
  }
}

export default App;

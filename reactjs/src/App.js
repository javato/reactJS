import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props){
  return <p>{props.titulo}</p>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello titulo='function component 1'/>
        </header>
        <Hello titulo='function component 2'/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

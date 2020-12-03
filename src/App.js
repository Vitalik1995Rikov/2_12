import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {this.props.name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.link}
        </a>
      </header>
    </div>
  )
}
}


export default App;


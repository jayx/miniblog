import React, { Component } from 'react';
import logo from '../css/images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="site">
        <header className="site__header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="header__title">miniblog :)</h1>
          <h2 className="header__subtitle">Create articles in minutes</h2>
        </header>
        <main className="site__content">
          <p>Site content goes here</p>
        </main>
        <footer className="site__footer">
          <p>Beer &copy; me!</p>
        </footer>
      </div>
    );
  }
}

export default App;

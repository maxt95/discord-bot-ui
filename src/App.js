import React, { Component } from 'react';
import './App.scss';
import StatsPage from './components/statsPage'
import Header from './components/header'
import Sidenav from './components/sidenav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="app-header" />

        <Sidenav className="app-sidenav"/>
        <StatsPage />
      </div>
    );
  }
}

export default App;

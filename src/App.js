import React, { Component } from 'react';
import './App.scss';
import StatsPage from './components/statsPage'
import Header from './components/header'
import Sidenav from './components/sidenav'

class App extends Component {

  state = {
    sidenavOpen: false,
  }

  handleMenuClick = () => {
    if(this.state.sidenavOpen) {
      this.setState({sidenavOpen: false})
    }
    else {
      this.setState({sidenavOpen: true})
    }
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleMenuClick} />

        <Sidenav active={this.state.sidenavOpen} />
        <StatsPage />
      </div>
    );
  }
}

export default App;

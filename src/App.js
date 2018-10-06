import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonToggle from './components/buttontoggle/index.js';
import Moment from 'moment';

class App extends Component {

  constructor(props) {
    const DEFAULT_VALUE = 0;

    super(props);
    this.handleButtonToggleChanged = this.handleButtonToggleChanged.bind(this);

    this.state = {
      slider14 : DEFAULT_VALUE,
      slider15 : DEFAULT_VALUE,
      slider16 : DEFAULT_VALUE,
      slider17 : DEFAULT_VALUE,
      buttonToggle18 : DEFAULT_VALUE,
      buttonMomentary19 : DEFAULT_VALUE,
    }
  }

  componentDidMount() {}

  handleButtonToggleChanged(id, value) {
    
  }

  handleButtonMomentaryChanged(id, value) {
    
  }

  handleSliderChanged(id, value) {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload. TestTest
          </p>
          <ButtonToggle id={14}></ButtonToggle>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonToggle from './components/buttontoggle/index.js';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    const DEFAULT_VALUE = 0;

    super(props);
    this.handleButtonToggleChanged = this.handleButtonToggleChanged.bind(this);

    this.state = {
      timeStamp : moment.format(),
      slider14 : DEFAULT_VALUE,
      slider15 : DEFAULT_VALUE,
      slider16 : DEFAULT_VALUE,
      slider17 : DEFAULT_VALUE,
      buttonToggle18 : DEFAULT_VALUE,
      buttonMomentary19 : DEFAULT_VALUE
    }
  }

  componentDidMount() {
    // call eventLoop() here
  }

  eventLoop() {
    // timer that calls sendStateToController() every 100ms
    // use moment.js (https://momentjs.com/guides/)
    // likely important: reference http://momentjs.com/docs/#/parsing/unix-timestamp-milliseconds/ millisecond time differential
  }

  sendStateToController() {
    // use Fetch API to post JSON object of each of this application's state values 
    // to our backend here. for reference: (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 
  }

  handleButtonToggleChanged(id, value) {
    // apply state changes to the component that corresponds with the ID specified in the state value list (this.state{})
  }

  handleButtonMomentaryChanged(id, value) {
    // apply state changes to the component that corresponds with the ID specified in the state value list (this.state{})
  }

  handleSliderChanged(id, value) {
    // apply state changes to the component that corresponds with the ID specified in the state value list (this.state{})
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

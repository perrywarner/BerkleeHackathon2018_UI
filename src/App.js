import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonToggle from './components/buttontoggle/index.js';
import ButtonMomentary from './components/buttonmomentary/index.js';
import moment from 'moment';
import SliderImplementation from './components/slider';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  constructor(props) {
    const DEFAULT_VALUE = 0;

    super(props);
    this.handleButtonToggleChanged = this.handleButtonToggleChanged.bind(this);
    this.handleButtonMomentaryChanged = this.handleButtonMomentaryChanged.bind(this);
    this.handleSliderChanged = this.handleSliderChanged.bind(this);

    this.state = {
      timeStamp: moment(),
      slider14: DEFAULT_VALUE,
      slider15: DEFAULT_VALUE,
      slider16: DEFAULT_VALUE,
      slider17: DEFAULT_VALUE,
      buttonToggle18: DEFAULT_VALUE,
      buttonMomentary19: DEFAULT_VALUE,
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
    const sliderRangeMinBound = 0;
    const sliderRangeMaxBound = 127;
    // const sliderDefaultValue = 64;
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <SliderImplementation id={14} min={sliderRangeMinBound} max={sliderRangeMaxBound}></SliderImplementation>
              </Col>
              <Col>
                <SliderImplementation id={15} min={sliderRangeMinBound} max={sliderRangeMaxBound}></SliderImplementation>
              </Col>
              <Col>
                <SliderImplementation id={16} min={sliderRangeMinBound} max={sliderRangeMaxBound}></SliderImplementation>
              </Col>
              <Col>
                <SliderImplementation id={17} min={sliderRangeMinBound} max={sliderRangeMaxBound}></SliderImplementation>
              </Col>
              <Col>
                <ButtonToggle id={18}></ButtonToggle>
                <br/>
                <br/>
                <br/>
                <ButtonMomentary id={19}></ButtonMomentary>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
          </Container>
        </header>
      </div >
    );
  }
}

export default App;

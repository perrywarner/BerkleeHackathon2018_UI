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
    const DEFAULT_VALUE = 127;
    super(props);
    this.handleButtonToggleChanged = this.handleButtonToggleChanged.bind(this);
    this.sendStateToController = this.sendStateToController.bind(this);
    this.interval = null;

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
    this.eventLoop();
  }

  eventLoop() {
    this.interval = setInterval(() => {
      this.sendStateToController()
    }, 100);
  }

  sendStateToController() {
    // use Fetch API to post JSON object of each of this application's state values 
    // to our backend here. for reference: (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    
    var myInit = { 
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors',
      body: JSON.stringify({
        "time": this.state.timeStamp,
        "14": this.state.slider14, 
        "15": this.state.slider15, 
        "16": this.state.slider16, 
        "17": this.state.slider17, 
        "18": this.state.buttonToggle18, 
        "19": this.state.buttonMomentary19
      }) 
    };
  
    var url = "https://berklee.herokuapp.com/midi"
    var myRequest = new Request(url);

    fetch(myRequest,myInit).then(function(response) {
      
    });
    return;
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

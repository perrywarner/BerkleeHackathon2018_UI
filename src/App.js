import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import ButtonToggle from './components/buttontoggle/index.js';
import SliderBinding from './components/slider/index.js';
import ButtonMomentary from './components/buttonmomentary/index.js';
import moment from 'moment';
import SliderImplementation from './components/slider';
import { Container, Row, Col } from 'reactstrap';



class App extends Component {

  constructor(props) {
	  
	const SLIDER_DEFAULT_VALUE = 63;
    const DEFAULT_VALUE = 127;
	const NUMBER_OF_SLIDERS = 4;
	
    super(props);
	
    this.handleButtonToggleChanged = this.handleButtonToggleChanged.bind(this);
    this.sendStateToController = this.sendStateToController.bind(this);
    this.interval = null;
    this.myRef = React.createRef();
	
	this.sliderRefs =  Array(NUMBER_OF_SLIDERS);
	
	for(let i = 0; i < NUMBER_OF_SLIDERS; i++)
		this.sliderRefs[i] = React.createRef();
	
    this.state = {
      timeStamp: moment(),
      //slider14: DEFAULT_VALUE,
      //slider15: DEFAULT_VALUE,
      //slider16: DEFAULT_VALUE,
      //slider17: DEFAULT_VALUE,
      buttonToggle18: DEFAULT_VALUE,
      buttonMomentary19: DEFAULT_VALUE,
	  sliders: Array(NUMBER_OF_SLIDERS).fill(SLIDER_DEFAULT_VALUE),
    }
  }

  componentDidMount() {
	 
    // call eventLoop() here
    this.eventLoop();
  }

  eventLoop() {
    this.interval = setInterval(() => {
      this.sendStateToController();
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
        "14": parseInt(this.state.sliders[0]), 
        "15": parseInt(this.state.sliders[1]), 
        "16": parseInt(this.state.sliders[2]), 
        "17": parseInt(this.state.sliders[3]), 
        "18": this.state.buttonToggle18, 
        "19": this.state.buttonMomentary19
      }) 
    };

    var url = "/midi"
    var myRequest = new Request(url);
	
	//console.log(myInit);
	
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

  handleSliderChanged(id) {
    // apply state changes to the component that corresponds with the ID specified in the state value list (this.state{})
	//console.log(this.sliderRefs[id].current);
	this.state.sliders[id] = this.sliderRefs[id].current.state.value;
  }
  
  renderSlider(i, ref) {
    return (
      <SliderBinding
		ref = {ref}
		min = {0}
		max={127}
		onChange = {() => this.handleSliderChanged(i)}
		defaultValue = {63} //SLIDER_DEFAULT_VALUE
      />
    );
  }
  
  render() {
    //const sliderRangeMinBound = 0;
    //const sliderRangeMaxBound = 127;
    // const sliderDefaultValue = 64;
	
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
			   {this.renderSlider(0, this.sliderRefs[0])}
              </Col>
              <Col>
                {this.renderSlider(1, this.sliderRefs[1])}
              </Col>
              <Col>
                {this.renderSlider(2, this.sliderRefs[2])}
              </Col>
              <Col>
                {this.renderSlider(3, this.sliderRefs[3])}
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

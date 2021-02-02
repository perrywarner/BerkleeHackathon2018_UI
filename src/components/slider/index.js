import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Slider from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import '../slider/style.css';


//Refer to reference forwarding https://reactjs.org/docs/forwarding-refs.html
const SliderBinding = React.forwardRef((props, ref) => (
	<Slider ref = {ref} vertical={true} min={props.min} max={props.max} className={"slider"} style={{ height: 200 }} 
		onChange = {props.onChange} defaultValue = {props.defaultValue}> </Slider>
));

export default SliderBinding;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

class Slider extends Component {
    render(){
        return(
            <div>
                <Slider></Slider>
                <Range></Range>
            </div>
        )
    }
}
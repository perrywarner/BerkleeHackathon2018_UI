import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Slider from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import '../slider/style.css';

class SliderImplementation extends Component {
    constructor(props){
        super(props);
        console.log("Slider Constructor");
    }

    render(){
        return(
            <div>
                <Slider vertical={true} min={this.props.min} max={this.props.max} className={"slider"} style={{ height: 200 }}></Slider>
            </div>
        )
    }
}

export default SliderImplementation;
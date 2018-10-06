import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import '../buttontoggle/style.css';

class ButtonMomentary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentlyPressed: false,
            value: 0,
        };
    }

    onButtonClick() {
        // let nextDisabledState = !this.state.currentlyPressed;
        // let nextValue = nextDisabledState ? 0 : 127;
        // this.setState({ disabled: nextDisabledState, value: nextValue });

        // need to publish current click-down state to app every 100 ms. 
    }

    render() {
        return (
            <div>
                <Button 
                color="primary" 
                size="lg" 
                className="enabled"
                onClick={() => this.onButtonClick()}>
                {this.props.id ? this.props.id : ""}
                </Button>
                {' '}
            </div>
        )
    }
}

export default ButtonMomentary;
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import '../buttontoggle/style.css';

class ButtonToggle extends Component {
    constructor(props) {
        super(props);
        this.state = { disabled: false };
    }

    onButtonClick() {
        const previousState = this.state.disabled;
        this.setState({ disabled: !previousState });
    }

    render() {
        return (
            <div>
                <Button 
                color="primary" 
                size="lg" 
                className={this.state.disabled ? "disabled" : "enabled"}
                onClick={() => this.onButtonClick()}>
                {this.props.id ? this.props.id : ""}
                </Button>
                {' '}
            </div>
        )
    }
}

export default ButtonToggle;
import React, {Component} from 'react';


class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minimum: 1,
            maximum: 10,
            numeric: 4,
            min: 1,
            max: 10
        };
    }
    handleInputMinChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;
        var newState;
        if (value > this.state.maximum) {
            let maxVal = this.state.maximum;
            newState = {
                [name]: maxVal - 1,
                min: maxVal - 1
            }
        } else {
            newState = {
                [name]: value,
                min: value
            }
        }
        this.setState(newState);
    }

    handleInputMaxChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;
        var newState;
        if (value < this.state.minimum) {
            let minVal = this.state.minimum;
            newState = {
                [name]: minVal + 1,
                max: minVal + 1
            }
        } else {
            newState = {
                [name]: value,
                max: value
            }
        }
        this.setState(newState);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;
        var newState;
        let x;
        if (value < this.state.minimum) {
            x = this.state.minimum;
        }
        else if (value > this.state.maximum) {
            x = this.state.maximum;
        } else {
            x = value;
        }
        newState = {
            [name]: x
        };
        this.setState(newState);
    }

    handleFunctionMinus(event) {
        this.setState({numeric: --this.state.numeric});
        if (this.state.min > this.state.numeric) {
            this.setState({numeric: this.state.min});
        }
    }

    handleFunctionPlus(event) {
        this.setState({numeric: ++this.state.numeric});
        if (this.state.max < this.state.numeric) {
            this.setState({numeric: this.state.max});
        }
    }
    render() {
        return (
                <p className="App-intro">
                    <div className="input-row">
                        <span>Минимум</span>
                        <input id="number-min" type="number" name="minimum" value={this.state.minimum}
                               onChange={(e) => this.handleInputMinChange(e)}/>
                        <span>Максимум</span>
                        <input id="number-max" type="number" name="maximum" value={this.state.maximum}
                               onChange={(e) => this.handleInputMaxChange(e)}/>
                    </div>
                    <div className="input-row">
                        <span id="dec" onClick={(e) =>this.handleFunctionMinus(e)}>-</span>
                        <input id="number" className="input-check" type="number" name="numeric"
                               min={this.state.min} max={this.state.max} value={this.state.numeric}
                               onChange={(e) => this.handleInputChange(e)}/>
                        <span id="inc" onClick={(e) => this.handleFunctionPlus(e)}>+</span>
                    </div>
                </p>
        );
    }

}

export default Count;
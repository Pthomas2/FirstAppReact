import React, { Component } from 'react';

class ClickCounter extends Component {

    constructor(props){
        super();
        this.state = {
            counter: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter(){

        this.setState( state => ({
                counter: state.counter + 1
        }) );


    }




    render() {
        return (
            <div className="hello" >
                <p>Counter: {this.state.counter}</p>
                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}

export default ClickCounter;
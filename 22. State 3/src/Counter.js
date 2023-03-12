import React from "react";
import CounterDisplay from "./CounterDisplay";

export class Counter extends React.Component {
    
    state = {
        counter: this.props.counter
    }
    
    constructor(props) {
        super(props);
        
        setInterval(()=> {
            this.setState(()=>{
                return {counter : this.state.counter + 1}
            })
        }, 1000)
    }
    
    
    render() {
        return (
            <CounterDisplay counter={this.state.counter} />
        );
    }
}
import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={counter:0}
    }
    render(){
        return(
            <p>{this.props.counter}</p>
        )
    }
}
export default Counter
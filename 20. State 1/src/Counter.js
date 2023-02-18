import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={counter:0}
    }
    componentDidMount(){
        window.setInterval(()=>{this.setState({counter:this.state.counter+1})},1000)
    }
    render(){
        return(
            <p>{this.state.counter}</p>
        )
    }
}
export default Counter
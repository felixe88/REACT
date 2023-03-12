import React from 'react'

class ClickCounter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
    handleButtonClick = (event)=>{
        console.log(event)
        this.setState((state) => {
            return{
                counter: state.counter + 1,
            }
        })
    }
    render(){
        return(
            <div>
                <h3>count: {this.state.counter}</h3>
                <button onClick={this.handleButtonClick}>Click me</button>
            </div>
        )
    }
}
export default ClickCounter
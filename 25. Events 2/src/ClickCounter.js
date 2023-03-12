import React from 'react'

class ClickCounter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0,
            lastClick:null
        }
    }
    handleButtonClick = (event)=>{
        console.log(event)
        this.setState((state) => {
            return{
                lastClick:event.target.name,
                counter: state.counter + 1
            }
        })
    }
    render(){
        return(
            <div>
                <h3>count: {this.state.counter}</h3>
                <button onClick={this.handleButtonClick} name="Button1">Button1</button>
                <button onClick={this.handleButtonClick} name="Button2">Button2</button>
                <button onClick={this.handleButtonClick} name="Button3">Button3</button>
                <h3>Last button pressed: {this.state.lastClick}</h3>
            </div>
        )
    }
}
export default ClickCounter
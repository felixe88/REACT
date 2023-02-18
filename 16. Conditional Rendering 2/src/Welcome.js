import React from 'react'
import Age from './Age'

class Welcome extends React.Component{
    render(){
        return(
            <>
                <p>Welcome , {this.props.name}</p>
                {this.props.showAge && <Age age={this.props.age}/>}
            </>
        )
    }
    static defaultProps={
        name:"name is not defined",
        age:"age is not defined"
    }
}

export default Welcome;
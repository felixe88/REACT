import React from 'react'
class Welcome extends React.Component{
    render(){
        return(
            <p>Welcome , {this.props.name}</p>
        )
    }
    static defaultProps={
        name:"Nome non definito"
    }
}

export default Welcome;
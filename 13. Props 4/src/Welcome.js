import React from 'react'
class Welcome extends React.Component{
    render(){
        return(
            <>
                <p>Welcome , {this.props.name}</p>
                <p>You'r age is {this.props.age}</p>
            </>
        )
    }
    static defaultProps={
        name:"name is not defined",
        age:"age is not defined"
    }
}

export default Welcome;
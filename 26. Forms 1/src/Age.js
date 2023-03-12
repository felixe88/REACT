import React from "react"

const age = (props)=>{
    if(props.age>=18){
        return <p>your age is {props.age}.</p>
    }else if(props.age<18){
        return <p>You are very young</p>
    }else if(props.age>65){
        return <p>you are very old</p>
    }
}
export default age
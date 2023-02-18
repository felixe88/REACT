import React from "react"

const age = (props)=>{
    if(props.age>18){
        return <p>your age is {props.age}.</p>
    }else{
        return <p>You are very young</p>
    }
}
export default age
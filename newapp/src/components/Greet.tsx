import React from 'react'

type GreetProps = {
    name:string
    age:number
    isLoading?:boolean
}

const Greet = (props:GreetProps) => {
  return (
    <div>Hi ra {props.name} and age is {props.age} </div>
  )
}

export default Greet
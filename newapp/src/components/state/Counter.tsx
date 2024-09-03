import React, { useReducer } from 'react'

const initialstate = {count : 0}

type CountState = {
    count:number
}

type UpdateAction = {
    type:"increment" | "decrement";
    payload:number
}

type ResetAction = {
    type:"reset";
}

type CountAction = UpdateAction | ResetAction

const counterReducer = (state:CountState, action:CountAction) => {
    switch(action.type){
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - action.payload}
        default:
            return state
}
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialstate)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"increment",payload:10})}>increment</button>
        <button onClick={() => dispatch({type:"decrement",payload:10})}>decrement</button>
        <button onClick={() => dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Counter
import React, { useReducer } from 'react'

const initialState = {
    count : 0,
    resetCount : 0
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, count : state.count + action.value}
        case 'decrement' :
            return {...state, count : state.count - action.value}
        case 'reset':
            return {count : 0, resetCount : state.resetCount + 1,}
        default:
            return state
    }
}

function CounterTwo() {
    const [newState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {newState.count} ResetCount - {newState.resetCount}</div>
            <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
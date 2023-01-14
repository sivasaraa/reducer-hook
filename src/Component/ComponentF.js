import React, { useContext, useReducer } from 'react'
import { countContext } from '../App'

function ComponentF(){
    const context = useContext(countContext)
    return (
        <div>
            ComponentF
            <button onClick={() => context.dispatch('increment')}>Increment</button>
            <button onClick={() => context.dispatch('decrement')}>Decrement</button>
            <button onClick={() => context.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
import React, { useContext } from 'react'
import { countContext } from '../App'

function ComponentD(){
    const context = useContext(countContext)
    return (
        <div>
            ComponentD
            <button onClick={() => context.dispatch('increment')}>Increment</button>
            <button onClick={() => context.dispatch('decrement')}>Decrement</button>
            <button onClick={() => context.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
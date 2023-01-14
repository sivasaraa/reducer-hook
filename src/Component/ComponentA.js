import React, { useContext } from 'react'
import { countContext } from '../App'

function ComponentA(){
    const context = useContext(countContext)
    return (
        <div>
            ComponentA
            <button onClick={() => context.dispatch('increment')}>Increment</button>
            <button onClick={() => context.dispatch('decrement')}>Decrement</button>
            <button onClick={() => context.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
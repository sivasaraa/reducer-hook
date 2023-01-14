import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading : true,
    post : {},
    error : ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post : {},
                error : 'Something went wrong'
            }
        default:
            return state;
    }
}

function DataFetchingTwo(){
    const [newState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        }).catch(() => {
            dispatch({type: 'FETCH_ERROR'})
        })
    })

    return (
        <div>
            {newState.loading ? 'Loading' : newState.post.title}
            {newState.error ? newState.error : null}
        </div>
    )
}

export default DataFetchingTwo
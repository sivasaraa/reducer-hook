import logo from './logo.svg';
import './App.css';
import React from 'react'
import CounterOne from './Component/CounterOne';
import CounterTwo from './Component/CounterTwo';
import CounterThree from './Component/CounterThree';
import ComponentA from './Component/ComponentA';
import ComponentB from './Component/ComponentB';
import ComponentC from './Component/ComponentC';
import { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const countContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <countContext.Provider value={{count : count, dispatch : dispatch}}>
      <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>

    </countContext.Provider>
  );
}

export default App;

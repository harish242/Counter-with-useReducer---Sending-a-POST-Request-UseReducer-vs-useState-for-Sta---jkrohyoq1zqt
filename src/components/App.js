import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const App = () => {
const [state,dispatch] = useReducer(counterReducer,{count:0})

const Increment=()=>{
  const action={
    type:"Increment",
  }
  dispatch(action)
}
const Decrement=()=>{
  const action={
    type:"Decrement",
  }
  dispatch(action)
}
  return (
    <div id="main">
      <span id="counter">{state.count}</span>
      <button id="increment-btn" onClick={Increment}>Increment</button>
      <button id="decrement-btn" onClick={Decrement}>Decrement</button>

    </div>
  )
}


export default App;

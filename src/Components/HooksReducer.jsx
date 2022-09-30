import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const HooksReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='useReducer'>
    <h2>4.What is UseReducer Hook ?(Implementation)</h2>
        <ul>
            <li>The useReducer Hook is similar to the useState Hook.</li>
            <li>It allows for custom state logic.</li>
            <li>If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</li>
            <li>useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.</li>
        </ul>
      <h2> Num:{count}</h2>
      <button className='addbtn' onClick={() => dispatch("add")}>Add</button>
      <button className='subbtn' onClick={() => dispatch("subtract")}>Subtract</button>
      <button className='resbtn' onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default HooksReducer
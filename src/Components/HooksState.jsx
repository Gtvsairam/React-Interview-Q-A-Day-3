import React,{useState} from 'react'

const HooksState =() => {
    const [name,setName] =useState("Hello world welcome!!")
  return (
    <div>
        <h2>5. What is UseState Hook ?(Implementation)</h2>
        <h3>Def:-</h3>
        <p>The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries. <br/> UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
        <h3>Example:-</h3>
        <h1>{name} <br/>
        <button onClick={() => setName("Hello Gtv Sairam")} type="button" className="btn btn-primary">Click Me</button>

        </h1>
        
    </div>
  )
}

export default HooksState
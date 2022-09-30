import React,{useState,useEffect} from 'react'

function HooksEffect() {
    const [count,setCount] =useState(0)
    const [total, setTotal] = useState(0);
    useEffect(()=>{
      setTotal(() => count * 5);  
    },[count])
  return (
    <div>
        <h2>2. What is useEffect Hook ?(Implementation)</h2>
        <ul>
            <li>The useEffect Hook allows you to perform side effects in your components.</li>
            <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
            <li>useEffect accepts two arguments. The second argument is optional.</li>
            <li>useEffect(function, dependency)</li>
        </ul>
        <h3>Example:-</h3>
       <p>Cost of 1 bulletv = 5$</p>
        <h2>Akm Firing bullets(7.62mm): {count}</h2>
        <h1>total: {total}$ <br/>
        <button type="button" className="btn btn-danger" onClick={() => setCount((c) => c + 1)}>Shoot</button>
        </h1>
    </div>
  )
}

export default HooksEffect;
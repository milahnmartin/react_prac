import React,{useState,useEffect} from "react";


function Counter() {
    const [count,setCount] = useState(JSON.parse(localStorage.getItem('counter')));

   

    useEffect(()=>{
        document.title = `Counter is: ${count}`;
        JSON.stringify(localStorage.setItem('counter',count));
    },[count]);
    return ( 
        <div className="counte">
            <button onClick={()=>{setCount(count + 1)}}>INC COUNTER</button>
            <h1>Counter IS: {count}</h1>
        </div>
    );
}

export default Counter;
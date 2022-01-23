import React,{useState,useEffect} from "react";


function Data() {
    const [api,setAPI] = useState({loading:true,data:null});
    // const sometin = ['Milahn','Pieter','Johan']
    useEffect(()=>{
        setAPI({loading:true,data:null});
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(x => x.json())
        .then(y => {
            setAPI({loading:false,data:y});
        });
        
    },[]);

    return (
        <div className="data">
            <ul>
               {api.data.map((info)=>{
                   <li key={info.postId}>
                       Name:{info.name}
                       ID: {info.postId}
                   </li>
               })}
            </ul>
        </div>
    );
}

export default Data;

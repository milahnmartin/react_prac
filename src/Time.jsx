import React,{useEffect,useState}  from "react";


function Name(){

    React.useEffect(()=>{
        console.log("Component Mounted");

        return () =>{
            console.log("COMPONENT UNMOUNTED");
        }
    },[]);

    return <h1>Say HI</h1>
}


export default Name;


// local storage

// localStorage.setItem()
// localStorage.getitem()
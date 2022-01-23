import './App.css';
import React,{ useState, useEffect } from 'react';
import Name from './Time';
import Counter from './Counter';
import Data from './Data';
function App() {
  const [name,setName] = useState('Milahn');
  const [width,setWidth] = useState(window.innerWidth);

  const names = ['Milahn','Jakob','Pizza','Jabok']


  const change_user = () => {
    console.log(names);
    const index = Math.floor(Math.random() * names.length)

    document.title = names[index];

    setName(names[index]);
  }

  const add_name = () => {
      names.push(name+"new");
  }

  const handleChange = () => {
    setWidth(window.innerWidth);
  }

  const [sayHi_visible,setsayHi_visible] = useState(false);

  useEffect(()=>{
    console.log("EFFECT WAS CALLED")
    document.title = width;
    window.addEventListener('resize',handleChange);


    return(()=>{
      console.log("RETURN WAS CALLED")
      window.removeEventListener('resize',handleChange);
    })
  },[width]);

  

  const handlehi = () => {
    setsayHi_visible(!sayHi_visible);
  }

  return (
    <div className="App">

      <h1 className='title-name'>Hello {name}</h1>
      <button className='mybtn' onClick={change_user}>Change User</button>
      <button onClick={handlehi}>Show Say Hi</button>
      <h1>Current Width is {width} px</h1>
      <div className="my-time" style={{position:'absolute',top:'200px'}}>
      {sayHi_visible && <Name/>}
      <Counter/>
      <h1>Heres what we got from the api</h1>
      <Data/>
      </div>
    </div>
  );
}

export default App;

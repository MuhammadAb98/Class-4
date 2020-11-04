import React, {useState} from 'react';
import {Msg} from './mess';
import './App.css';


function Main()
{

let [count,setCount]=useState(0) // hook initialize variable 
let [isMorning,setmorning]=useState(true);

return(
  
  <div className={`box ${isMorning?'DayLight':''}`}>

    <h6>Day Time {isMorning ? 'Morning':'Night' }</h6>

   <Msg co={count} />
<button className="btn" onClick={  ()=>setCount(++count)  }   >   

  Increment</button> 
  <br/>

  <button className="btn" onClick={

    
    ()=>setCount(--count)
    
    }>
    Decrement
  </button>

<br/>
  <button className="btn" onClick={

    
()=>setCount(0)

}>
RESET
</button>
<br/>
<button className="btn"
onClick={
  ()=> setmorning(!isMorning)  //isMorning is waja se likha kuin kay changing 
                               //isi pay ani ha
}

>
Change Theme
</button>
</div>
);  //Ye Arrow function anamous hota ha with no name
}


export default Main; //agar default na lagown to import kay sat same name use karn

//hoga

//ak file main ak hi deafult export ho sakti ha


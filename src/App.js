import React, {useState} from 'react';


function Main()
{

let [count,setCount]=useState(0) // hook initialize variable 

return(
  <div>
<h1>Hello {count}</h1>
<button onClick={
  ()=>alert('Button Pressed')}>   
  Updates Counter</button>
    

</div>
);  //Ye Arrow function anamous hota ha with no name
}


export default Main; //agar default na lagown to import kay sat same name use karn

//hoga

//ak file main ak hi deafult export ho sakti ha


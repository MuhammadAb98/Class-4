import React from 'react';

function Grade(props)
{
 return (

<div>
    
 <h1>Anoucement</h1>
 <h3>Result Arrived</h3>
 <br/>

 <legend>

 <h5>Name: {props.name} Grade: {props.grd} Status:{props.status}</h5>
</legend>

</div>
 );
}

export default Grade;
import React from 'react';

const userOutput = (props)=>{
    return(
        <div> 
            <p> hi this is {props.userName} </p>
            <p> my name is {props.userName} </p>
        </div>
    );
}

export default userOutput;
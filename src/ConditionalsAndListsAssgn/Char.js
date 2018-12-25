import React from 'react';

const style = {
    display:'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}

const char = (props) =>{
    return <p style={style} onClick={props.click}>{props.char}</p>
}

export default char;
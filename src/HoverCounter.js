import React from 'react';
import HoCounter from './HoCounter'

function HoverCounter(props) {
    return (
        <>
            <h1 onMouseEnter={props.func}>You entered {props.count} times</h1>
            <h2 onMouseEnter={props.func}>You entered {props.count} times</h2>
            <h3 onMouseEnter={props.func}>You entered {props.count} times</h3>
        </>
    )
}

export default HoCounter(HoverCounter, 4)
import React from 'react';
import HoCounter from './HoCounter'

function HoverCounter(props) {
    return (
        <>
            <h1>Another branch</h1>
            <h1 onMouseEnter={props.func}>You entered {props.count} times</h1>
        </>
    )
}

export default HoCounter(HoverCounter, 4)
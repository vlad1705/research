import React from 'react';
import HoCounter from './HoCounter'

function ClickCounter(props) {
    return (
        <button onClick={props.func}>You clicked {props.count} times</button>
    )
}

export default HoCounter(ClickCounter, 4)
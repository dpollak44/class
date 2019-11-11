import React from 'react';

export default function Address(props/*{ address: { street, city, state, zip } }*/) {
    const { street, city, state, zip } = props.address;
    return (
        <>
            <h4>{street}</h4>
            <h4>{city}</h4>
            <h4>{state}</h4>
            <h4>{zip}</h4>
        </>
    );
}
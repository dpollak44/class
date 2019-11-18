import React from 'react';

export default props => {
    return (
        <>
            <h1>{props.weather.location}</h1>
            <img src={props.weather.icon} alt={props.weather.description} />
            <h2>{props.weather.description}</h2>
        </>
    );
}
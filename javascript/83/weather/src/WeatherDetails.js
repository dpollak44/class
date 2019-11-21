import React from 'react';

export default ({ weather: { location, icon, description } }) => {
    //const { location, icon, description } = props.weather;

    return (
        <>
            <h1>{location}</h1>
            <img src={icon} alt={description} />
            <h2>{description}</h2>
        </>
    );
}
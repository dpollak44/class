import React from 'react';

export default (props) => {
    return (
        <input onBlur={props.getWeather} />
    );
};
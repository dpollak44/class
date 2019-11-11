import React from 'react';
import Address from './Address';
import Grades from './Grades';

export default function Student(props) {
    return (
        <>
            {/*<h2>{props.name}</h2>
            <h2>{props.address}</h2>*/}
            <h2>{props.student.name}</h2>
            {/*<h2>{props.student.address}</h2>*/}
            <Address address={props.student.address} />
            <Grades grades={props.student.grades} />
        </>
    );
}
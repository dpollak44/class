import React from 'react';
import './Grades.css';

export default function Grades(props) {
    return (
        <ul>{props.grades.map((grade, index) => <li key={index}>{grade}</li>)}</ul>
    );
}
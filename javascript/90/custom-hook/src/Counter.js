import React /*, { useState, useEffect }*/ from 'react';
import useLocalStorage from './useLocalStorage';

export default () => {
    /*const [count, setCount] = useState(() => {
        return window.localStorage.getItem('count') || 0;
    });

    useEffect(
        () => { window.localStorage.setItem('count', count) }, [count]
    );*/

    const [count, setCount] = useLocalStorage('count', 0);

    return (
        <button onClick={() => setCount(+count + 1)}>I was clicked {count} times</button>
    )
}
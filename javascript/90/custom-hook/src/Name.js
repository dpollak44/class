import React /*, { useState, useEffect }*/ from 'react';
import useLocalStorage from './useLocalStorage';


export default () => {
    /*const [name, setName] = useState(() => {
        return window.localStorage.getItem('name') || '';
    });

    useEffect(
        () => { window.localStorage.setItem('name', name) }, [name]
    );*/

    const [name, setName] = useLocalStorage('name');

    return (
        <div>
            Name: <input value={name} onChange={e => setName(e.target.value)} />
        </div>
    );
}
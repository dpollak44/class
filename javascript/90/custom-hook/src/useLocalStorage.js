import { useState, useEffect } from 'react';

export default (key, defaultValue = '') => {
    const [state, setState] = useState(() => {
        return window.localStorage.getItem(key) || defaultValue;
    });

    useEffect(
        () => { window.localStorage.setItem(key, state) }, [state]
    );

    return [state, setState];
}
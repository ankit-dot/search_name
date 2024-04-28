'use client'

import {useEffect, useState} from 'react';

export const useDebouce  = (value , delay = 200) => {
    const [debouce, setDebounce] = useState(value);

    useEffect(() => {
        const timeOut = setTimeout( () => {
            setDebounce(value);
        },delay)

        return () => clearTimeout(timeOut);
    }, [value, delay]);

    return debouce;
}
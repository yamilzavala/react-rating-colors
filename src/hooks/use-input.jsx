import {useState} from 'react';

export const useInput = (initialValue) => {
    const [value, setState] = useState(initialValue);
    return [
        { value, onChange: e => setState(e.target.value) },
        () => setState(initialValue)
    ]
}
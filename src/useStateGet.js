import React from 'react';
import { flushSync } from 'react-dom';

// This hook is actually useless...
function useStateGet(value) {
    const [target, setTarget] = React.useState(value);
    
    const getTarget = async () => {
        let newValue = await target;
        return newValue;
    }

    const setFlushTarget = (newValue) => {
        flushSync(() => {
            setTarget(newValue);
        });
    }

    return [target, setTarget, getTarget, setFlushTarget];
}

export default useStateGet;
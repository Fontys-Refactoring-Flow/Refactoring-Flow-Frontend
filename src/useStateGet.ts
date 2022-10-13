import React from 'react';
import {flushSync} from 'react-dom';

// This hook is actually useless...
function useStateGet(value: any) {
    const [target, setTarget] = React.useState(value);
    
    const getTarget = async () => {
        return await target;
    }

    const setFlushTarget = (newValue: any) => {
        flushSync(() => {
            setTarget(newValue);
        });
    }

    return [target, setTarget, getTarget, setFlushTarget];
}

export default useStateGet;
import React from 'react';


function useStateGet(value) {
    const [target, setTarget] = React.useState(value);
    
    const getTarget = async () => {
        return target.value;
    }

    return [target, setTarget, getTarget];
}

export default useStateGet;
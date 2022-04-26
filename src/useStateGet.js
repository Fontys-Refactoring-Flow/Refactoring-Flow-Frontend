import React from 'react';


function useStateGet(value) {
    const [target, setTarget] = React.useState(value);
    
    const getTarget = async () => {
        let value = await target;
        //console.log('value function: ' + value);
        return value;
    }

    return [target, setTarget, getTarget];
}

export default useStateGet;
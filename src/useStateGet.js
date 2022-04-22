import { useState } from "react";


function useStateGet(value) {
    const [target, setTarget] = React.useState(value);
    
}

export default useStateGet;
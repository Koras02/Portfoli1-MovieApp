 import React, { useCallback, useState } from 'react';
import Sex from './Sex';

export function Toggle() {
    const [toggle,setToggle] = useState(false);
    const onToggle = useCallback(() => {
        setTimeout(() => {
            setToggle(toggle => !toggle);
        },0)
    },[]);
     return (
       <>
       <div toggle={toggle? 'ON' : 'OFF'} />
           {toggle && <Sex />}
       </>
     );
 }


 export default Toggle;
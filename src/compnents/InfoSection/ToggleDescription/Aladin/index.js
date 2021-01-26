import React, {useCallback,useState} from 'react';
import Aladin from './Aladin';
import {
  Img
} from "./ImgStyle";

export const InfoSection = ({
    img3,
  }) => {
    const [toggle,setToggle] = useState(false);
    const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle(toggle => !toggle); 
    },0)
  },[]);
      return (
      <>
        <Img
        to="/img"
        src={img3}
        smooth={true}
        duration={500}
        onClick={onToggle}
      />
      <div>
         <div
           toggle={toggle ? 'ON' : 'OFF'}/>
             {toggle && <Aladin />}
         />
      </div>
      </>
      );
  }
 
 
  export default InfoSection;
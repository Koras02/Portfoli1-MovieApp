 import React, { useCallback, useEffect, useState } from "react"; 
import {
  InfoContainer,
  InfoRow,
  ImgWrap,
  Img,
  InfoWrapper,
  FormH1,
 
} from "./InfosctionContainer";
import Aladin from "./ToggleDescription/Aladin/Aladin";
import DOLLITE from "./ToggleDescription/DOLLITE/DOLLITE";
 
 
export const InfoSection = ({
  imgStart, 
  img,
  headLine,
  table,
  img3,
  img2,
  title,
  lightText,
  dark,
}) => {
  const [toggle,setToggle] = useState(false);
  const [aladin,setAladin] = useState(false);
  const onToggle = useCallback(() => {
  setTimeout(() => {
    setToggle(toggle => !toggle); 
  },1000)
},[]);
  const onAladin = useCallback(() => {
  setTimeout(() => {
  setAladin(aladin => !aladin);
  },0)
},[]);
 
  const [scrollNav,setScrollNav] = useState(true);
    const changeNav = () => {
      if(window.scrollY > 100) {
        setScrollNav(false)
      } else {
        setScrollNav(true)
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
  return (
    <>
      <InfoContainer id="Tv" scrollNav={scrollNav}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <FormH1>{headLine}</FormH1>
            <ImgWrap>
              <Img 
                src={img}
                title={title}
                lightText={lightText}
                dark={dark}
                scrollNav={scrollNav}
                smooth={true}
                duration={500}
                onMouseOver={onToggle}
                />
              <Img
                to="/img"
                src={img2}
                smooth={true}
                duration={500}
                onMouseOver={onAladin}
              />
              <Img
                to="/img"
                src={img3}
                smooth={true}
                duration={500}
                />
            </ImgWrap>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
              <div>
              <div  
              toggle={toggle? 'ON' : 'OFF'} smooth={true} duration={500}/>
                {toggle && <DOLLITE />}
               </div>        
              <div>
              <div  
              toggle={aladin? 'ON' : 'OFF'} smooth={true} duration={500}/>
                {aladin && <Aladin />}
              </div>          
    </>
  );
 };

 export default InfoSection
 import React, { useCallback, useEffect, useState } from "react"; 
import {
  InfoContainer,
  InfoRow,
  ImgWrap,
  Img,
  InfoWrapper,
  FormH1,
} from "./InfosctionContainer";
 
import DOLLITE from "./ToggleDescription/DOLLITE";
 
 
 
export const InfoSection = ({
  imgStart, 
  img,
  headLine,
  table,
  img2,
  img3,
  title,
  lightText,
  dark,
}) => {
  const [toggle,setToggle] = useState(false);
  const onToggle = useCallback(() => {
  setTimeout(() => {
    setToggle(toggle => !toggle);
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
                onClick={onToggle}
              />
              <Img
                src={img2}
                smooth={true}
                duration={500}
                animation="bounce"
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
                {toggle && <DOLLITE/>}
              </div>
    </>
  );
 };

 export default InfoSection
 import React, { useEffect,useState} from "react"; 
import {
  InfoContainer,
  InfoRow,
  ImgWrap,
  Img,
  InfoWrapper,
  FormH1,
} from "./InfosctionContainer";
import Sex from "./Sex";
 

function Toggle() {
  useEffect(() => {
    console.log("render");

    return () => console.log("sss");
  });
  return <Sex />;
}

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
  const [mounted, setMounted] = useState(true);
  const [scrollNav, setScrollNav] = useState(true);
  const toggle = ({ toggle }) => setMounted(!mounted);
  const changeNav = () => {
    if(window.scrollY > 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

  return (
    <>
      <InfoContainer id="Tv">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            {table}
            <FormH1>{headLine}</FormH1>
            <ImgWrap>
              <Img
                src={img}
                title={title}
                lightText={lightText}
                dark={dark}
                scrollNav={scrollNav}
                onClick={toggle}
                smooth={true}
                duration={5000}
              />
              <Img
                src={img2}
                onClick={toggle}
                scrollNav={scrollNav}
                smooth={true}
                duration={500}
                animation="bounce"
              />
              <Img
                to="/img"
                src={img3}
                onClick={toggle}
                scrollNav={scrollNav}
                smooth={true}
                duration={500}
              />
              <div>
                {mounted && (
                  <Toggle
                    onClick={toggle}
                    scrollNav={scrollNav}
                    smooth={true}
                    translate={true}
                    duration={500}
                  />
                )}
              </div>
            </ImgWrap>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
 };

 export default InfoSection
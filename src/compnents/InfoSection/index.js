 import React from "react"; 
import {
  InfoContainer,
  InfoRow,
  ImgWrap,
  Img,
  InfoWrapper,
  FormH1,
} from "./InfosctionContainer";
 

sadsa
 

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
              />
              <Img src={img2} />
              <Img to="/img" src={img3} title={title} />
              {Text}
            </ImgWrap>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
 };


 export default InfoSection
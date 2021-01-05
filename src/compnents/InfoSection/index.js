import React from 'react'
import {
   InfoContainer,
   InfoRow,
   ImgWrap,
   Img,
   InfoWrapper,
} from './InfosctionContainer'

const InfoSection = ({
    id,
    imgStart,
    img,
    headLine,  
    table,
}) => {
    return (
      <>
        <InfoContainer id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                {table}
                {headLine}
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
};

export default InfoSection

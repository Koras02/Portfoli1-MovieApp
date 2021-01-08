import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import {
  InfoContainer,
  InfoRow,
  ImgWrap,
  Img,
  InfoWrapper,
  FormH1,
} from "./CategoryContainer";
 
 
 

const Category = ({
  imgStart,
  img,
  headLine,
  table,
  img4,
  title,
  lightText,
  dark,
}) => {
 
    return (
      <>
        <InfoContainer id="Category">
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <FormH1>{headLine}</FormH1>
              <ImgWrap>
                <Img src={img4}></Img>
                <Img src={img4}></Img>
                <Img src={img4}></Img>
                <Img src={img4}></Img>
              </ImgWrap>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
}

export default Category;

import React from "react";
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
  headLine,
  img4,
  img5,
  img6,
}) => {
 
    return (
      <>
        <InfoContainer id="Category">
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <FormH1>{headLine}</FormH1>
              <ImgWrap>
                <Img src={img4}>
                </Img>
                <Img src={img5}></Img>
                <Img src={img6}></Img>
                <Img src={img4}></Img>
              </ImgWrap>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>

      </>
    );
}

export default Category;

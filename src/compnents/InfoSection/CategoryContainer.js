import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #000;
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  position: relative;
  bottom: 30px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 20px 30px 50px;
  border: 1px solid #000;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2'`};
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 10px;
  grid-area: col1;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  float: left;
  display: inline;
`;

export const Img = styled.img`
  width: 40%;
  opacity: 40%;
  position: relative;
  top: -100px;
  max-width: 1200px;
  color: red;
  padding: 20px;
  margin-left: 30px;
  font: bold 18px/24px arial;
 
  

  &:hover {
    opacity: 100%;
    transition: 0.8s;
    border-bottom: 2px solid palegoldenrod;
    color: red;
 
  }

  &:active {
    border-bottom: 2px solid red;
  }
`;


export const FormH1 = styled.div`
  font: bold 24px/24px arial;
  position: relative;
  bottom: 24px;
  left: 30%;
  color: #fff;

  &:hover {
    transition: 0.5s;
    color: pink;
  }
`;

 


export const FormDescrtion = styled.div`
  color: red;
  float: right;
  position: absolute;
  text-align: center;
  top: 30%;
  left: 25%;
  opacity: 84%;
  width: 16%;
  height: 43%;
  border: 1px solid red;
  opacity: 0%;

  &:hover {
    opacity: 100%;
    display: block;
    transition: 5s;
  }
`;

 
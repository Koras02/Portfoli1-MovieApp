import styled from 'styled-components';


export const DOLLITEWrapper = styled.div`
width:100%;
height:600px; 
margin:auto;
position:relative;
bottom:40px;
padding:2%;
border:1px solid red;
background:#000;
border-top:1px solid red;
`;

export const DOLITEWrapperScreenVideo = styled.video`
  width:20%;
  float:left;
  display:block;
  position:relative;
  max-width:20%;
  left:25%;
  height:600px;
  color:#fff;
 
`;

export const DOLITERightDescription = styled.div`
 width:100%;
 float:right;
 display:block;
 position:absolute;
 left:50%;
`;


export const DOLITEWrapperScreenH1 = styled.div`
   float:left;
   text-align:center;
   font:bold 24px/34px arial;
   color:red;
   display:block;
   margin:0px 0px 0px 10px;
`;

export const DOLITEWrapperScreenP = styled.div`
  text-align:center;
  font:bold 14px/18px arial;
  color:#fff;
  float:left;
  margin:90px 140px 90px -100px;

  
  @media screen and (max-width:1400px) {
    margin:90px 140px 90px -120px;
  }

  @media screen and (max-width:1024px) {
    margin:90px 140px 90px -140px;
    color:red;
    padding:2px;
    display:block;
  }
`;
import styled from 'styled-components';


export const AladinWrapper = styled.div`
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

export const AladinWrapperScreenVideo = styled.video`
width:30%;
float:left;
display:block;
position:relative;
max-width:30%;
left:15%;
height:600px;
color:#fff;
 
`;

export const ALadinRightDescription = styled.div`
width:100%;
float:right;
display:block;
position:absolute;
left:50%;
`;

export const AladinWrapperScreenH1 = styled.div`
float:left;
text-align:center;
font:bold 24px/34px arial;
color:red;
display:block;
margin:0px 0px 0px 10px;
`;

export const AladinWrapperScreenP = styled.div`
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
`

export const AladinFrom = styled.div`
width:100%;
height:400px;
color:#fff;
position:absolute;
left:50%;
top:30%;
`;

export const AladinPiture = styled.div`
height:100px;
color:#fff;
`;

export const AladinP1 = styled.div`
font:bold 16px/18px arial;
margin:40px 0px 0px 30px;
`
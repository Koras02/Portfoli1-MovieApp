import styled from 'styled-components';


export const Img = styled.img`
width: 30%;
opacity: 40%;
position:relative;
top:-100px;
max-width:1200px;
color:red;
margin-left:30px;
font:bold 18px/24px arial;

&:hover{
  opacity: 100%;
  transition: 0.8s;
  border-bottom: 2px solid palegoldenrod;
  color:red;
}

&:active {
  border-bottom: 2px solid red;
}
`;
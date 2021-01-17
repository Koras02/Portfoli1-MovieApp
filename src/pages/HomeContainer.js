import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FormHeader = styled.div`
   width:100%;
   background:#000;
   height:150px;
   border: 1px solid #000;
   `;

export const HeaderLink = styled(LinkR)`
  text-decoration: none;
  width: 100%;
  color: #fff;
  align-items: center;
  padding: 4%;
  position: relative;
  top: 25%;
  font: bold 18px/48px arial;
 
  
  &:hover {
      border-bottom: 2px solid red;
      color: red;
      transition: 0.5s;
    
  }

  &:active {
    border-bottom: 2px solid red;
    color: red;
    transition: 0.5s;
  }

  @media screen and (max-width: 1024px) {
    font: bold 18px/24px arial;
  }
`;

export const HeaderInput = styled.input`
   width:10%;
   padding:0.5%;
   align-items:center;
   display:block;
   position:relative;
   overflow:hidden;
   top:25%;
   right:12%;
   color:#000;
   border: 2px solid red;
   background: #fff;
   float:right;
`
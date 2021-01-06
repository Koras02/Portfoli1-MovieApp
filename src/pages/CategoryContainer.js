import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
 
export const FormHeader = styled.div`
   width:100%; 
   height:1000px;
   position:relative;
   top:20%;
   bottom:50px;
   background: #000;
   color: red;
   `;


export const FormPLink = styled(LinkR)`
  width: 14%;
  height: 15%;
  font: bold 18px/24px arial;
  text-align: center;
  border: 1px solid #fff;
  float: left;
  position: relative;
  display: inline;
  left: 4%;
  padding: 12px;
  margin: 30px;
  transition: 9.5s;
  text-decoration:none;
  color:#fff;

  &:hover {
    color: blue;
  }
`;


export const FormH1 = styled.div`
  font: bold 18px/24px arial;
  padding:50px;
  text-align:center;
  border:1px solid #000; 
  color:#fff;

`;
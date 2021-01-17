import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from 'react-router-dom'

export const FormHeader = styled.div`
  background: ${({scrollNav}) => (scrollNav ? '-100%':'red')};
  width: 100%;
  background: #000;
  height: 100px;
  border: 1px solid #000;
  display:inline-block;
`;

export const HeaderLinks = styled(LinkS)`
  text-decoration: none;
  width: 100%;
  color: #fff;
  align-items: center;
  padding: 2%;
  margin:20px;
  position: relative;
  top: 25%;
  font: bold 18px/50px arial;
  :checked &:hover {
    border-bottom: 2px solid red;
    color: red;
    transition: 0.5s;
  }

  &:active {
    border-bottom: 3px solid red;
    color: red;
    transition: 0.5s;
  }

  @media screen and (max-width: 1024px) {
    font: bold 18px/24px arial;
  }
`;

export const HeaderInput = styled.input`
  width: 10%;
  padding: 0.5%;
  align-items: center;
  display: block;
  position: relative;
  overflow: hidden;
  top: 25%;
  right: 12%;
  color: #000;
  border: 2px solid red;
  background: #fff;
  float: right;
`;


export const FormBody = styled.div`
   width:100%;
   height:500px;
   border:1px solid #000;
`

export const FormH1 = styled.div`
  font:bold 25px/24px arial;
  color:red;
  text-align:center;
`;

export const player = styled.div`
   width:100px;
`
 
export const HeaderLink = styled(LinkR)`
  text-decoration: none;
  color: #fff;

  position: relative;
  display:block;
  float:right;
  left:3%;
  top:26%;
  font: bold 18px/28px arial;
  &:hover{
    color:red;
    transition: 0.5s;
  }
`;
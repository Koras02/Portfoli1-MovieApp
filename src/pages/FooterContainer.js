import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const FooterWrapper = styled.div`
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: -20px auto;
  overflow-x:hidden;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

 
export const FooterHeader = styled.div`
  color: red;
  padding: 100px;
  float: left;

  @media screen and(max-width: 1024px) {
    float: right;
    background: red;
    color: blue;
    display: inline;
    position: relative;
    left:10%;
    bottom: 100px;
  }
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  text-align: left;
  width: 180px;
  box-sizing: border-box;
  color: #fff;
  font: bold 12px/20px arial;
  @media screen and (max-width: 820px) {
    padding: 20px;
    margin: -40px;
    font: 10px/10px arial;
  }
`;

export const FooterH1 = styled.div`
  font: bold 18px/24px arial;
  padding: 20px;
  display: block;
  color: red;
  float:left;

  @media screen and (max-width: 1024px) {
    display:inline;
    float:right;
    color: yellow;
    background-color:#646262;
    margin: 20px;
    padding-left:20px;
  }
  &:hover {
    color: #01bf71;
  }
`;

export const Footerli = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  float:left;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and(max-width:1024px) {
    padding: 1px;
    float: right;
    background: red;
    margin: 10px;
  }
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;


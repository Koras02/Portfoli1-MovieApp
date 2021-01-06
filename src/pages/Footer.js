import React from "react";
import { RiNetflixLine } from "react-icons/ri";
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterWrapper,
  FooterHeader,
  FooterBody,
  FooterH1,
  Footerli,
} from "./FooterContainer";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterWrapper>
      <FooterHeader>
        <RiNetflixLine to="/" 
        Icons={RiNetflixLine} 
        size={50} 
        id="footer" 
        onClick={toggleHome}
        smooth={true} />
      </FooterHeader>
      <FooterBody>
        <FooterH1>기업소개</FooterH1>
        <Footerli to="/">약관사항</Footerli>
        <Footerli to="/">개인정보 처리 방침</Footerli>
        <Footerli to="/">필수 사항</Footerli>
      </FooterBody>
      <FooterBody>
        <FooterH1>약관동의</FooterH1>
        <Footerli to="/">약관사항</Footerli>
        <Footerli>개인정보 처리 방침</Footerli>
        <Footerli>필수 사항</Footerli>
      </FooterBody>
      <FooterBody>
        <FooterH1>기업소개</FooterH1>
        <Footerli to="/">약관사항</Footerli>
        <Footerli>개인정보 처리 방침</Footerli>
        <Footerli>필수 사항</Footerli>
      </FooterBody>
      <FooterBody>
        <FooterH1>기업소개</FooterH1>
        <Footerli to="/">약관사항</Footerli>
        <Footerli>개인정보 처리 방침</Footerli>
        <Footerli>필수 사항</Footerli>
      </FooterBody>
    </FooterWrapper>
  );
}

export default Footer;

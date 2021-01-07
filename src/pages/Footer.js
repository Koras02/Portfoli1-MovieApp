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
        <RiNetflixLine
          to="/"
          Icons={RiNetflixLine}
          size={50}
          id="footer"
          onClick={toggleHome}
          smooth={true}
        />
      </FooterHeader>
      <FooterBody>
        <FooterH1>기업소개</FooterH1>
        <Footerli to="/">약관사항</Footerli>
        <Footerli to="/">개인정보 처리 방침</Footerli>
        <Footerli to="/">필수 사항</Footerli>
      </FooterBody>
      <FooterBody>
        <FooterH1>법률관련 사항</FooterH1>
        <Footerli to="/">영상 정보 처리 방침</Footerli>
        <Footerli>개인정보 보호 및 처리 기능</Footerli>
        <Footerli>컨텐츠 계약 준수 사항</Footerli>
      </FooterBody>
      <FooterBody>
        <FooterH1>문의 사항</FooterH1>
        <Footerli to="/">광고 관련 문의</Footerli>
        <Footerli>개인정보 처리 방침</Footerli>
        <Footerli>필수계약 준수 사항</Footerli>
      </FooterBody>
      <FooterBody>
        <FooterH1>고객센터</FooterH1>
        <Footerli to="/">고객센터</Footerli>
        <Footerli>메일관련</Footerli>
        <Footerli>고객 커뮤니티 사이트</Footerli>
      </FooterBody>
    </FooterWrapper>
  );
}

export default Footer;

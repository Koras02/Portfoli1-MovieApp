import React, { useState, useEffect } from "react";
import {
  FormHeader,
  HeaderLinks,
  HeaderInput,
  FormBody,
  FormH1,
  HeaderLink,
} from "./redContainer";
import ReactPlayer from 'react-player';
import InfoSection from "../compnents/InfoSection";
import { homeObjone, homeObjTwo } from "../compnents/InfoSection/Data";
import {animateScroll as scroll} from 'react-scroll'
import Category from "../compnents/InfoSection/Category";
import Footer from "./Footer";
 
  
 

const Movies = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);
      

    const changeNav = () => {
      if(window.scrollY > 80) {
        setScrollNav(false)
      } else {
        setScrollNav(true)
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, [])


    const toggleHome = () => {
      scroll.scrollToTop();
    }

  return (
    <>
      <FormHeader scrollNav={scrollNav} onClick={toggleHome} smoth={true}>
        <HeaderLinks to="/Movies" onClick={toggleHome}>
          Movies
        </HeaderLinks>
        <HeaderLinks
          to="Tv"
          smooth={true}
          scrollNav={scrollNav}
          onClick={toggle}
        >
          Tv
        </HeaderLinks>
        <HeaderLinks>Search</HeaderLinks>
        <HeaderInput type="search"></HeaderInput>
        <HeaderLink to="/Sign">로그인</HeaderLink>
      </FormHeader>
      <FormBody>
        <FormH1>
          <ReactPlayer
            className="player"
            playing={true}
            onReady={true}
            fullscreen={true}
            muted={true}
            url="https://youtu.be/F8sUY7mOrDk"
            width="100%"
            height="500px"
            loading={true}
            loop={true}
            playIcon={false}
            playlogo={false}
          />
        </FormH1>
      </FormBody>
      <InfoSection {...homeObjone} />
      <Category {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Movies;

import React, { useState, useEffect } from "react";
import {
  FormHeader,
  HeaderLinks,
  HeaderInput,
  FormBody,
  FormH1,
  HeaderLink,
} from "./redContainer";
import InfoSection from "../compnents/InfoSection";
import { homeObjone, homeObjTwo } from "../compnents/InfoSection/Data";
import {animateScroll, animateScroll as scroll} from 'react-scroll'
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
     <FormHeader
        scrollNav={scrollNav}
        onClick={toggleHome}
        smooth={true}
        state={true}
        loading
      >
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
        <HeaderLinks to="Category" smooth={true} scrollNav={scroll}>
          Search
        </HeaderLinks>
        <HeaderLinks to="/">NetFlix</HeaderLinks> 
        <HeaderInput type="search"></HeaderInput>
        <HeaderLink to="/Sign">로그인</HeaderLink>
      </FormHeader>
      <FormBody>
        <FormH1>
        </FormH1>
      </FormBody>
      <InfoSection {...homeObjone} scrollNav={scroll} animateScroll={animateScroll}/>
      <Category {...homeObjTwo} />
      <Footer />
    </>
  );}
  

export default Movies;

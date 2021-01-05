import React from "react";
import {
  FormHeader,
  HeaderLink,
  HeaderInput,
  FormBody,
  FormH1,
} from "./redContainer";
import ReactPlayer from 'react-player';
import InfoSection from "../compnents/InfoSection";
import { homeObjone } from "../compnents/InfoSection/Data";
 
 

 

function Movies() {
  return (
   <>
    <FormHeader>
      <HeaderLink to="/movies">Movies</HeaderLink>
      <HeaderLink to="/">Tsv</HeaderLink>
      <HeaderLink>Search</HeaderLink>
      <HeaderInput type="search"></HeaderInput>
    </FormHeader>
    <FormBody>
      <FormH1>
          <ReactPlayer className='player'
          playing={true}
          onReady={true} 
          fullscreen={true}
          muted={true} 
          url=
          "https://youtu.be/F8sUY7mOrDk" 
          width="100%"
          height="500px"
          loading={true}
          loop={true}
          playIcon={false}
          />
      </FormH1>
    </FormBody>,
    <InfoSection {...homeObjone} />
  </>
  );
}

export default Movies;

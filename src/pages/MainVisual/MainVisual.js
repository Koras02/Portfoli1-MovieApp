import React  from 'react';
 
import {
  MainVisualWrapper,
  MainVisualForm,
  // MainVisualH1,
  ImgWrap,
  MainVisualVideo,
  MainVisualH1,
  MainVisualButton,
  MainVisualButton2
} from './MainVisualStyle'
// import Tome from './Trailer/Tome.mp4';
import { IoPlaySharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md"
 
export const MainVisual = ({
  headeLine,
  // topLine,
  // Img,
  // ButtonLabel,
  // ButtonLabel2,
}) => {
     return (
       <>
         <MainVisualWrapper>
           <MainVisualForm>
             <ImgWrap>
                <MainVisualVideo></MainVisualVideo>  
                <MainVisualH1>Tom & Jerry</MainVisualH1>
                <MainVisualButton>
                  <IoPlaySharp/>
                  Play</MainVisualButton>
                <MainVisualButton2>
                  <MdFavorite/>
                  Favorite</MainVisualButton2>
             </ImgWrap>
           </MainVisualForm>
         </MainVisualWrapper>
       </>
     );
 }


 export default MainVisual;
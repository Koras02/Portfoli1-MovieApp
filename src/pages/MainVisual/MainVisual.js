import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import {
  MainVisualWrapper,
  MainVisualForm,
  MainVisualH1,
  ImgWrap,
  Background,
  MainVisualH2,
  MainVisualButton,
  MainVisualVideo
} from './MainVisualStyle'
import Tome from './Trailer/Tome.mp4';
import { FaTruckLoading } from "react-icons/fa";
export const MainVisual = ({
  headeLine,
  topLine,
  Img,
  ButtonLabel,
  ButtonLabel2,
}) => {
     const [loading,setLoading] = useState(true);
     
     useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
     if(0) {
        return null;
        }
      }, [loading])

     return (
       <>
         <MainVisualWrapper>
           <MainVisualForm>
             <MainVisualH1>{topLine}</MainVisualH1>
             <ImgWrap>
               <Background>{Img}</Background>
               <MainVisualH2>{headeLine}</MainVisualH2>
             </ImgWrap>
               <MainVisualButton>{ButtonLabel}</MainVisualButton>
               <MainVisualButton>{ButtonLabel2}</MainVisualButton>
              {loading === false ? (
               <MainVisualVideo src={Tome} autoPlay={true} onEnded={Loading}/>
              ) : (
                <Loading icon={FaTruckLoading}/>
              )}
           </MainVisualForm>
         </MainVisualWrapper>
       </>
     );
 }


 export default MainVisual;
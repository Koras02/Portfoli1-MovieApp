import React from 'react';
import {
  MainVisualWrapper,
  MainVisualHeader,
  MainBackground,
  MainBackgroundVideo,
  MainBackgroundVideoH1,
  MainBackgroundVideoButton
    // Img
  } from './MainVisualStyle'
import Video from './Trailer/Aladin.mp4';

function MainVisual() {
     return (
       <>
       <MainVisualWrapper>
         <MainVisualHeader>
          <MainBackground>
             <MainBackgroundVideo loop muted autoPlay src={Video} type='video/mp4'/>
             <MainBackgroundVideoH1>신작영화</MainBackgroundVideoH1> 
             <MainBackgroundVideoButton to="/">바로 보러 가기</MainBackgroundVideoButton>
          </MainBackground>
         </MainVisualHeader>
       </MainVisualWrapper> 
       </>
     );
 }


 export default MainVisual;
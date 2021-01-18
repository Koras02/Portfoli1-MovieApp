import React from 'react';
import AladinDescription from './AladinDescription';
import {
    AladinWrapper, 
    AladinWrapperScreenVideo,
    ALadinRightDescription,
    AladinWrapperScreenH1,
    AladinWrapperScreenP
} from './AladinStyle'
import Video from './Trailer/Aladin.mp4'

export function Aladin() {
     return (
          <AladinWrapper>
                   <AladinWrapperScreenVideo autoPlay unmuted src={Video}/>
                  <ALadinRightDescription>
                      <AladinWrapperScreenH1>Aladin</AladinWrapperScreenH1>
                      <AladinWrapperScreenP>출현/제작:</AladinWrapperScreenP>
                      <AladinWrapperScreenP>윌 스미스</AladinWrapperScreenP>
                      <AladinWrapperScreenP>앨런 듀틱</AladinWrapperScreenP>
                      <AladinWrapperScreenP>프랭크 웰커</AladinWrapperScreenP>
                      <AladinWrapperScreenP>니나 와디아</AladinWrapperScreenP>
                  </ALadinRightDescription>
                 <AladinDescription />
          </AladinWrapper>
     );
 }


 export default Aladin;
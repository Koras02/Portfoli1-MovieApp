import React  from 'react';
import DOLITELIST from './DOLITELIST';
import {
    DOLLITEWrapper,
    DOLITEWrapperScreenVideo,
    DOLITEWrapperScreenH2,
    DOLITERightDescription,
    DOLITEWrapperScreenP,
 } from './DOLITTEStyle'
import Video2 from './Trailer/Trailer.mp4'

function DOLLITE() {    
    return (
        <>
         <DOLLITEWrapper>
            <DOLITEWrapperScreenVideo autoPlay src={Video2} />
           <DOLITERightDescription>
            <DOLITEWrapperScreenH2>DOLITTELE</DOLITEWrapperScreenH2> 
            <DOLITEWrapperScreenP>출현/제작:</DOLITEWrapperScreenP>
            <DOLITEWrapperScreenP>로버트 다우니 주니어</DOLITEWrapperScreenP>
            <DOLITEWrapperScreenP>톰 홀랜드</DOLITEWrapperScreenP>
            <DOLITEWrapperScreenP>라미 말렉</DOLITEWrapperScreenP>
            <DOLITEWrapperScreenP>셀레나 고메스</DOLITEWrapperScreenP>
            </DOLITERightDescription> 
            <DOLITELIST />
         </DOLLITEWrapper>
 
         </>
     );
  }


 export default DOLLITE;
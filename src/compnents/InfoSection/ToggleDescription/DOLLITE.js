import React from 'react';
import DOLITELIST from './DOLITELIST';
import {
    DOLLITEWrapper,
    DOLITEWrapperScreenVideo,
    DOLITEWrapperScreenH1,
    DOLITERightDescription,
    DOLITEWrapperScreenP,
 } from './DOLITTEStyle'
import Video from './Trailer/Trailer.mp4'

function DOLLITE() {     
    return (
        <>
         <DOLLITEWrapper>
            <DOLITEWrapperScreenVideo autoPlay muted src={Video}/>
           <DOLITERightDescription>
            <DOLITEWrapperScreenH1>DOLITTELE</DOLITEWrapperScreenH1> 
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
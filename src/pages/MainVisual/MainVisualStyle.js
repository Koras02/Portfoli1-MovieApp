import styled from 'styled-components';
import Video2 from './Trailer/Trailer.mp4';
import {Link as LinkR} from 'react-router-dom';

export const MainVisualWrapper = styled.div`
    width:100%;
    height:800px;
`;

export const MainVisualHeader = styled.div`
    max-width:60%;
    height:600px;
    margin:auto;
    border:1px solid blue;
    position:relative;
    left:0;
    right:0;
`;

export const MainVisualHeaderH1 = styled.div`
    width:150%;
    height:200px;
    padding:10px;
    position:absolute;
    left:0;
    right:0;
 
    }
`;

export const Img = styled.video`
  height:400px;
  padding:100px;
  padding:40px;
  position:relative;
  left:0%;;
  right:20%;
  margin:auto;

  &:hover {
      transition:15s;
      background:${Video2};
  }
`;
 

export const MainBackground = styled.div`
  width:140%;
  margin:40px auto;
  height:500px;
  border:2px solid red;
  position:absolute;
  left:-23%;
`;

export const MainBackgroundVideo = styled.video`
  width:80%;
  float:left;
  height:500px;
  border:1px solid red;
 
`

export const MainBackgroundVideoH1 = styled.div`
  float:left;
  font:bold 30px/24px arial;
  color:#fff;
  padding:2%;
  margin:2px;
`

export const MainBackgroundVideoButton = styled(LinkR)`
  justify-content: flex-start;
  text-decoration:none;
  float:left;
  margin:20px 20px auto;
  padding:50px;
  background: #d9a7c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius:10% 50%;

  &:hover {
    background:red;
    color:#fff;
    transition:2s;
  }
`
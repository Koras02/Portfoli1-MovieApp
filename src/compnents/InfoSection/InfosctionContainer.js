import styled from 'styled-components'

export const InfoContainer = styled.div`
  background:powderblue;
  display:grid;
  z-index:1;
  height:1800px;
  width:100%;
  position: relative;
  bottom:20px;
  max-width:100%;
  margin-right:auto;
  margin-left:auto;
  padding: 10 10 20px;
  border: 1px solid #000;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display:grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
   imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2'`};
`;


export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const BtnWrap = styled.div`
   display:flex;
   justify-content: flex-start;
`;

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
`;

export const Img = styled.img`
   width: 80%;
   margin: 0 0 10px 0;
   padding-right: 0;
   opacity: 20%;

   &:hover{
     opacity: 100%;
     transition: 0.8s;
   }
`;


 
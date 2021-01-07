import React from 'react';
import { FormHeader, HeaderLink, HeaderInput } from './HomeContainer';



function Home() {
     return (
       <FormHeader>
         <HeaderLink 
         to="/Movies"
         >Movies</HeaderLink>
         <HeaderLink to="/Movies">Tv</HeaderLink>
         <HeaderLink>Search</HeaderLink>
         <HeaderInput type="search"></HeaderInput>
       </FormHeader>
     );
 }


 export default Home
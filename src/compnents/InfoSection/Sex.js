 import React, {useState, useEffect} from 'react';
 import {FormHeader} from './SexElement'

 function Sex() {
  const [scrollNav, setScrollNav] = useState(true);
  const [mounted, setMounted] = useState(true);
  const toggle = () => setMounted(!mounted);
  const changeNav = () => {
    if(window.scrollY > 80) {
      setScrollNav(false)
    } else {
      setScrollNav(true)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

     return (
       <FormHeader scrollNav={scrollNav} duration={2000} smooth={true} translate={true}  onClick={toggle}>
         
       </FormHeader>
     );
 }


 export default Sex
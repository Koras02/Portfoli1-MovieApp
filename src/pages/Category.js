import React from 'react'
import {FormHeader, FormH1, FormPLink} from './CategoryContainer' 

 
const Category = () => {
    return (
      <FormHeader>
        <FormH1>카테고리</FormH1>
        <FormPLink to="/">New</FormPLink>
        <FormPLink to="/">Foavorite</FormPLink>
        <FormPLink to="/">Action</FormPLink>
        <FormPLink to="/">Sport</FormPLink>
        <FormPLink to="/">Anime</FormPLink>
      </FormHeader>
    );
}

export default Category

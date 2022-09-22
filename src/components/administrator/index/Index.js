import React from 'react'
import { useState } from 'react';
import Header from '../header/Header'
import User from '../user/User'
import System from '../system/System'
export default function Index() {
  console.log("estoy en adm");
  const [page,setPage]=useState("users")
  
  const getContent=()=>{
    if(page==="users"){
      return <User/>;
    }else if(page==="plates"){
      return <h1>plates</h1>;
    }else if(page==="system"){
      return <System/>;
    }else{
      return <h1>roles</h1>;
    }
  }

  const toPage=(page)=>e=>{
    e.preventDefault();
    setPage(page)
    console.log(page);
  }
  return (

    <>
    <Header  toPage={toPage}></Header>
    {getContent()}
          
  


    </>
  )
}

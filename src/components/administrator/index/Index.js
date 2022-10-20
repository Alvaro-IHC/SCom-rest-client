import React from 'react'
import { useState } from 'react';
import Header from '../header/Header'
import User from '../user/User'
import System from '../system/System'
import PMain from '../platos/PMain'
import Table from '../table/Index'
export default function Index() {
  console.log("estoy en adm");
  const [page,setPage]=useState("users")
  
  const getContent=()=>{
    if(page==="users"){
      return <User/>;
    }else if(page==="plates"){
      return <PMain/>;
    }else if(page==="system"){
      return <System/>;
    }else{
      return <Table/>;
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

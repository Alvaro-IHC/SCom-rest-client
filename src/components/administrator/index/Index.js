import React from 'react'
import { useState } from 'react';
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Header from '../header/Header'
import User from '../user/User'
export default function Index() {
  console.log("estoy en adm");
  const [page,setPage]=useState("users")
  
  const getContent=()=>{
    if(page==="users"){
      return <User/>;
    }else if(page==="plates"){
      return <h1>plates</h1>;
    }else if(page==="system"){
      return <h1>sistema</h1>;
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
          
    {/*<BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/administrator/users" element={<User/>}/>
            <Route  path="/administrator/plates" element={<h1>platos</h1>}/>
            <Route  path="/administrator/system" element={<h1>sistema</h1>}/>
            <Route  path="/administrator/roles" element={<h1>roles</h1>}/>
            <Route path="*" element={<User replace to="/administrator/users" />} />
        </Routes>
  </BrowserRouter>*/}
  


    </>
  )
}

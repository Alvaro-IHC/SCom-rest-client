import React from 'react'
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Header from '../header/Header'
import User from '../user/User'
export default function Index() {
  return (
    <>
          
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/" element={<User/>}/>
            <Route  path="/users" element={<User/>}/>   
        </Routes>
    </BrowserRouter>


    </>
  )
}

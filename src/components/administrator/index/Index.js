import React from 'react'
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Header from '../header/Header'
import User from '../user/User'
export default function Index() {
  console.log("estoy en adm");
  return (

    <>

          
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/administrator/users" element={<User/>}/>
            <Route  path="/administrator/plates" element={<h1>platos</h1>}/>
            <Route  path="/administrator/system" element={<h1>sistema</h1>}/>
            <Route  path="/administrator/roles" element={<h1>roles</h1>}/>
            <Route path="*" element={<User replace to="/administrator/users" />} />
        </Routes>
    </BrowserRouter>
  


    </>
  )
}

import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AcercaDeNosotros from "./components/casual_user/acercaDeNosotros/AcercaDeNosotros";
import Contactanos from "./components/casual_user/contactanos/Contactanos";
import PreguntasFrecuentes from "./components/casual_user/preguntasFrecuentes/PreguntasFrecuentes";
import Inicio from "./components/casual_user/home/Inicio";
import NavBarExample from "./components/casual_user/layouts/Navbar";
 import SignIn from "./components/authentication/signin/SignIn";
 import SignUp from "./components/authentication/signup/SignUp";

 import Index from "./components/cashier/index/Index";
 //import Cmain from "./components/chef/Cmain";
 

 


function App() {
  const rolx = localStorage.getItem("role");

  const rutaPrincipal = (rolx === "cajero") ? <Index />:((rolx === "contactanos") ?<Contactanos /> :<NavBarExample/>);
  
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path="/" element={rutaPrincipal}>
            <Route index element={<Inicio />} />
            <Route path="acerca_de_nosotros" element={<AcercaDeNosotros />} />
            <Route path="contactanos" element={<Contactanos />} />
            <Route
              path="preguntas_frecuentes"
              element={<PreguntasFrecuentes />}
            />
               
             <Route path="sign_in" element={<SignIn />} />
            <Route path="sign_up" element={<SignUp />} /> 
            <Route path="valero" element={<Index />} /> 
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
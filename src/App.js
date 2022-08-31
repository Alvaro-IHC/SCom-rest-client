
import './App.css';
import {BrowserRouter,Navigate, Route, Routes} from 'react-router-dom';
import Acerca_de_nosotros from './components/casual_user/Acerca_de_nosotros';
import Contactanos from './components/casual_user/Contactanos';
import Preguntas_frecuentes from './components/casual_user/Preguntas_frecuentes';
import Inicio from './components/casual_user/Inicio';
import NavBarExample from './components/casual_user/layouts/Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
        <Routes>
          <Route path='/' element={<NavBarExample />}>
            <Route index element={<Inicio/>}/>
            <Route path='acerca_de_nosotros' element={<Acerca_de_nosotros/>}/>
            <Route path='contactanos' element={<Contactanos/>}/>
            <Route path='preguntas_frecuentes' element={<Preguntas_frecuentes/>}/>

            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter,Navigate, Route, Routes} from 'react-router-dom';
import Acerca_de_nosotros from './componentes/acerca_de_nosotros';
import Contactanos from './componentes/contactanos';
import Preguntas_frecuentes from './componentes/preguntas_frecuentes';
import Inicio from './componentes/inicio';
import NavBarExample from './layouts/navbar';

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

import React,{ useState, useEffect } from 'react'

import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './PreguntasFrecuentes.css';
import ContenedorPyR from './ContenedorPyR';
import settings from '../../../settings.json';
import AdicionarPreg from './AdicionarPreg';

const PreguntasFrecuentes = () => {

  const p = settings.puerto;
   const u = settings.url;
   const [menuPrFr,setMenuPrFr] = useState([])
   useEffect(() => {
      obtenerDatosPrFr()
   },[]);

   const obtenerDatosPrFr= async() =>
   {
     const dataPrFr = await fetch(u+p+'/api/question-answers/resolved')
    const pregfrecP = await dataPrFr.json()
     setMenuPrFr(pregfrecP)
   }


  return (
    <div>
    

<Table responsive className='tabla1234' striped bordered hover variant="dark">
<thead>
<tr>
    

    <td  className='titulopf'>
    
 
    <h1> Preguntas frecuentes</h1>
   

    </td>
    
    </tr><tr>
    <td className='celdaspf' >

  
     {menuPrFr.map((contenedorPyR,index) => {
        return (
     
          <ContenedorPyR key={index} preg={contenedorPyR.question} resp={contenedorPyR.answer}/>
        );

      })}

      <AdicionarPreg/>
    </td>
    </tr><tr>
    <td  > <ContenedorInferior/> </td>
  </tr>


</thead>

</Table>


</div>


  )
}

export default PreguntasFrecuentes

import React,{ useState, useEffect } from 'react'
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './AcercaDeNosotros.css';

import ContenedorAcordeon from './ContenedorAcordeon';
 import settings from '../../../settings.json';

const AcercaDeNosotros = () => {

   const p = settings.puerto;
   const u = settings.url;
   const [menuMV,setMenuMV] = useState([])
   useEffect(() => {
  obtenerDatosMV()
   });

   const obtenerDatosMV= async() =>
   {
     const dataMV = await fetch(u+p+'/api/mission-vision/last')
     const misionV = await dataMV.json()
     setMenuMV(misionV)
   }

  return (
    <div>
     

        <Table responsive className='tabla1234' striped bordered hover variant="dark">
<thead>
<tr>
    

    <td  className='tituloan'>
    
 
    <h1> Acerca de nosotros</h1>
   

    </td>
    
    </tr><tr>
    <td className='celdasan' >



     
          <ContenedorAcordeon  titulo="MISIÓN" contenido={menuMV.mission}/>
          <br/><br/>
          <ContenedorAcordeon  titulo="VISIÓN" contenido={menuMV.vision}/>



    </td>
    </tr><tr>
    <td  > <ContenedorInferior/> </td>
  </tr>


</thead>

</Table>


    </div>
  )
}

export default AcercaDeNosotros

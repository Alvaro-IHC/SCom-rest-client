import React from 'react'

import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './PreguntasFrecuentes.css';
import ContenedorPyR from './ContenedorPyR';
// import settings from '../../../settings.json';

const PreguntasFrecuentes = () => {

  // const p = settings.puerto;
  // const u = settings.url;
  // const [menuPrFr,setMenuPrFr] = useState([])
  // useEffect(() => {
  //    obtenerDatosPrFr()
  // }, []);

  // const obtenerDatosPrFr= async() =>
  // {
  //   const dataPrFr = await fetch(u+p+'/api/answersquestions')
  //   const pregfrecP = await dataPrFr.json()
  //   setMenuPrFr(pregfrecP)
  // }


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

   <ContenedorPyR preg="¿Es posible pedir platos con un mes de anticipación?" resp="Si es posible hacerlo mediante nuestra aplicación movil" />

   <ContenedorPyR preg="¿En que horario podemos comer o cenar en el restaurante?" resp="Todos los días de 13:00 a 15:30h. Y por las noches, viernes y sábado de 20:00h a 22:30h." />
    
   <ContenedorPyR  preg="¿Cuáles son las medidas COVID-19 que debo conocer antes de acudir a las instalaciones?" resp="El restaurante fue preparado como un lugar seguro en cumplimiento de todas las medidas de prevención, los máximos niveles de seguridad.
Todo el centro se somete periódicamente a intervenciones de limpieza, higiene y desinfección. La colaboración de los usuarios es fundamental de cara a garantizar la efectividad de estas medidas." />
    
    {/* {menuPrFr.map((contenedorPyR,index) => {
        return (
     
          <ContenedorPyR key={index} preg={contenedorPyR.question} resp={contenedorPyR.answer}/>
        );

      })} */}



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

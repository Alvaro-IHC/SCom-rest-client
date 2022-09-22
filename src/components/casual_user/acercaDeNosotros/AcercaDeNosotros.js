import React from 'react'
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './AcercaDeNosotros.css';

import ContenedorAcordeon from './ContenedorAcordeon';
// import settings from '../../../settings.json';

const AcercaDeNosotros = () => {

  // const p = settings.puerto;
  // const u = settings.url;
  // const [menuMV,setMenuMV] = useState([])
  // useEffect(() => {
  //    obtenerDatosMV()
  // }, []);

  // const obtenerDatosMV= async() =>
  // {
  //   const dataMV = await fetch(u+p+'/api/misionvision')
  //   const misionV = await dataMV.json()
  //   setMenuMV(misionV)
  // }

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


 
<ContenedorAcordeon  titulo="MISIÓN" contenido="Superar las expectativas de nuestros clientes de forma tal que nuestro nombre sea conocido como una experiencia memorable.

Ser opción destacable y diferente.

Mantener una excelente calidad en nuestros platos."/>
<br/><br/>
<ContenedorAcordeon  titulo="VISIÓN" contenido="Ser reconocidos entre los mejores restaurantes a nivel local y nacional por nuestra oferta gastronómica, ambiente y atención."/>
    
      {/* {menuMV.map((contenedorAcordeon,index) => {
        return (
     
          <ContenedorAcordeon key={index} titulo="MISIÓN" contenido={contenedorAcordeon.mision}/>
          <ContenedorAcordeon key={index} titulo="VISIÓN" contenido={contenedorAcordeon.vision}/>
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

export default AcercaDeNosotros

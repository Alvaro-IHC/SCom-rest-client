import React from 'react'
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './AcercaDeNosotros.css';

import ContenedorAcordeon from './ContenedorAcordeon';

const AcercaDeNosotros = () => {
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

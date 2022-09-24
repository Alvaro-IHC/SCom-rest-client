import React from 'react'

import ContenedorInferior2 from '../casual_user/contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './Cliente.css';
import BotonesImagenes3 from '../casual_user/botonesImagenes/BotonesImagenes3';

import CabeceraCl from './CabeceraCl';

const Cliente = () => {

   
  return (
    <div>


        <Table responsive className='tabla123456' striped bordered hover variant="dark">
<thead>
<tr>
    

    <td  className='titulocl'>
    
   <CabeceraCl/>
   
   
   

    </td>
    
    </tr><tr>
    <td className='celdaImgB' >
    <img className='imagen-logo' src={require('../../assets/images/user_casual/bienvenido.png')} alt='xd' width={600} />
  
    <br/><br/>
    <p>Se ha registrado correctamente, para continuar y realizar pedidos, descargue nuestra aplicación movil mediante el siguiente botón.</p> 
    <p>¡Gracias por contar con nosotros!</p>
<BotonesImagenes3/>

    </td>
    </tr><tr>
    <td  > <ContenedorInferior2/> </td>
  </tr>


</thead>

</Table>


    </div>
        
        
  )
}

export default Cliente

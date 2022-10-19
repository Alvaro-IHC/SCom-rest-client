import React,{ useState, useEffect } from 'react'
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './AcercaDeNosotros.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 import settings from '../../../settings.json';

const AcercaDeNosotros = () => {

   const p = settings.puerto;
   const u = settings.url;
   const [menuMV,setMenuMV] = useState([])
   useEffect(() => {
  obtenerDatosMV()
   },[]);

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



    <Container>
     
      <Row  >
        <Col className='centrotit' xs={12}>Misión </Col>
        <Col className='rellenoan' xs={12}>{menuMV.mission}<p></p></Col>
       
      </Row>
      <br/><br/>
      <Row >
        <Col className='centrotit' xs={12}>Visión</Col>
        <Col className='rellenoan' xs={12}>{menuMV.vision}<p></p></Col>
    
      </Row>
    </Container>

     



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

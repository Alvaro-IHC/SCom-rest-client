import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Inicio = () => {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
    <tr>
        
  
        <td  className='casilla_ubicacion'>
          
        <>
      {[
      
        'Info',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '13rem' }}
          className="mb-3"
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title> Ubicación </Card.Title>
            <Card.Text>
             Mapa
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>

        </td>
        <td >
          
        <Row className="justify-content-md-center">
  <Col className="justify-content-md-center" sm={3}>   <>
      {[
      
        'Info',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '13rem' }}
          className="mb-3"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </></Col>
 
</Row>

        </td>
      </tr>

    <tr>
      
        <td colSpan={2} ><h2>24328766-77123123</h2> </td>
   
      </tr>
  
   
    </thead>
 
  </Table>



  )
}

export default Inicio

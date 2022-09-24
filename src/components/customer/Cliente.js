import React from 'react'


import Table from 'react-bootstrap/Table';
import './Cliente.css';


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
    <td  >

    </td>
    </tr><tr>
    
  </tr>


</thead>
</Table>
    </div>          
  )
}

export default Cliente

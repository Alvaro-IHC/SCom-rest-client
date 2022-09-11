import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Cartas.css';

function Cartas() {

 
    const [menuPc,setMenuPc] = useState([])
    useEffect(() => {
       obtenerDatosc()
    }, []);
  


    const obtenerDatosc= async() =>
    {
      const datac = await fetch('http://localhost:9081/api/foods')
      const platosPc = await datac.json()
      setMenuPc(platosPc)
    }
  
  
    const [menuBc,setMenuBc] = useState([])
    useEffect(() => {
       obtenerDatos2c()
    }, []);
  
    const obtenerDatos2c= async() =>
    {
      const data2c = await fetch('http://localhost:9081/api/drinks')
      const bebidasBc = await data2c.json()
      setMenuBc(bebidasBc)
    }
  
   const platoDestacado1 = 0;
   const platoDestacado2 = 1;
   const bebidaDestacada = 0; 
 

   const id_p1d = menuPc[platoDestacado1].id;
   
   const nom_p1d = menuPc[platoDestacado1].name;
   const tip_p1d = menuPc[platoDestacado1].type;

   const id_p2d = menuPc[platoDestacado2].id;

   const nom_p2d = menuPc[platoDestacado2].name;
   const tip_p2d = menuPc[platoDestacado2].type;

   const id_b1d = menuBc[bebidaDestacada].id-3;
   
   const mar_b1d = menuBc[bebidaDestacada].brand;
   const grd_b1d = menuBc[bebidaDestacada].alcoholicGrade;

  return (
  
    <CardGroup>
      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+id_p1d+'.jpg')} alt='' width={400} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: {nom_p1d}</Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: {tip_p1d}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+id_p2d+'.jpg')} alt='' width={355} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: {nom_p2d}</Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: {tip_p2d}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/bebida'+id_b1d+'.jpg')} alt='' width={320} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Bebida: {mar_b1d}</Card.Title>
          <Card.Text className="letrasCartas">Grado alcohólico: {grd_b1d}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  )
}

export default Cartas;
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Cartas.css';

function Cartas() {

 
    const [menuP,setMenuP] = useState([])
    useEffect(() => {
       obtenerDatos()
    }, []);
  
    const obtenerDatos= async() =>
    {
      const data = await fetch('http://localhost:9081/api/foods')
      const platosP = await data.json()
      setMenuP(platosP)
    }

    const [menuB,setMenuB] = useState([])
    useEffect(() => {
       obtenerDatos2()
    }, []);
  
    const obtenerDatos2= async() =>
    {
      const data2 = await fetch('http://localhost:9081/api/drinks')
      const bebidasB = await data2.json()
      setMenuB(bebidasB)
    }
   const platoDestacado1 = 0;
   const platoDestacado2 = 1;
   const bebidaDestacada = 0; 
   const cantPlatos = 3;


  return (
  
    <CardGroup>
      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+menuP[platoDestacado1].id+'.jpg')} alt='xd' width={400} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: {menuP[platoDestacado1].name}</Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: {menuP[platoDestacado1].type}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+menuP[platoDestacado2].id+'.jpg')} alt='xd' width={355} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: {menuP[platoDestacado2].name}</Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: {menuP[platoDestacado2].type}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/bebida'+(menuB[bebidaDestacada].id-cantPlatos)+'.jpg')} alt='xd' width={320} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Bebida: {menuB[bebidaDestacada].brand}</Card.Title>
          <Card.Text className="letrasCartas">Grado alcohólico: {menuB[bebidaDestacada].alcoholicGrade}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default Cartas;
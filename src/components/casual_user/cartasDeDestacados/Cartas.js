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

   const id_p1d = menuP[platoDestacado1].id;
   const nom_p1d = menuP[platoDestacado1].name;
   const tip_p1d = menuP[platoDestacado1].type;
   const id_p2d = menuP[platoDestacado2].id;
   const nom_p2d = menuP[platoDestacado2].name;
   const tip_p2d = menuP[platoDestacado2].type;

   const id_b1d = menuB[bebidaDestacada].id;
   const mar_b1d = menuB[bebidaDestacada].brand;
   const grd_b1d = menuB[bebidaDestacada].alcoholicGrade;

  return (
  
    <CardGroup>
      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+id_p1d+'.jpg')} alt='xd' width={400} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: {nom_p1d}</Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: {tip_p1d}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+id_p2d+'.jpg')} alt='xd' width={355} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: {nom_p2d}</Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: {tip_p2d}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/bebida'+(id_b1d-cantPlatos)+'.jpg')} alt='xd' width={320} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Bebida: {mar_b1d}</Card.Title>
          <Card.Text className="letrasCartas">Grado alcohólico: {grd_b1d}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Muy recomendado</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default Cartas;
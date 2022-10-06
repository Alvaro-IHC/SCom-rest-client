import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect} from 'react'
var data2 = [
    
];
var data =[
    { codigo: 1, descripcion: "papa", cantidad: "5"},
    { codigo: 2, descripcion: "frijol", cantidad: "2 latas"},
    { codigo: 3, descripcion: "pimienta", cantidad: "1/2 kilos"},
    { codigo: 4, descripcion: "almidon", cantidad: "a"}
]
var temporal={codigo: 0, descripcion:"", cantidad:""}
function Aceptar(a){
    data2.push(a)
    data.splice(data.indexOf(a),1)
    return data
}
function Eliminar(a){
    data2.splice(data2.indexOf(a),1)
    return data2
}
function Abajo(){
    const [descripcion, setD]=useState("");
    const [cantidad, setC]=useState("");
    const setDes = (e) => {
        setD(e.target.value);
    }
    const setCan = (e) => {
        setC(e.target.value);
    }
    const [nro,setNro]=useState(data.length)
    const [nro2,setNro2]=useState(data2.length)
    const [Solicitud,setSolicitud]=useState(data)
    const [Solicitud2,setSolicitud2]=useState(data2)
    return (
        <div>
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col">
                    <div class="p-3 border bg-light">
                        <b>Aceptar ingredientes</b>
                        <p>Nro de ingredientes {nro}</p>
                        <table className="table">
                        <thead>
                            <tr>
                            
                            <th scope="col">Descripcion</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {Solicitud.map((elemenento)=>(
                                <tr>
                                
                                <td>{elemenento.descripcion}</td>
                                <td>{elemenento.cantidad}</td>
                                <td><button type="button" onClick={()=>{setSolicitud(Aceptar(elemenento));setNro(data.length);}} className="btn btn-success">Aceptar</button></td>
                                </tr>
                            ))}

                        </tbody>
                        </table>
                    </div>
                    </div>
                    <div class="col">
                    <div class="p-3 border bg-light">
                    <b>Ingredientes disponibles</b>
                        <p>Nro de ingredientes {nro2}</p>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Solicitud2.map((elemenento2)=>(
                                <tr>
                                <td>{elemenento2.descripcion}</td>
                                <td>{elemenento2.cantidad}</td>
                                <td><button type="button" onClick={()=>{setSolicitud2(Eliminar(elemenento2));setNro2(data2.length);}} className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Abajo;
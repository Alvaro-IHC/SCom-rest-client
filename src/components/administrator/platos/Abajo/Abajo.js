import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect} from 'react'
import settings from  './../../../../settings.json'
var data2 = [
    
];
var data =[
    { name: "papa", price:1, stock: 1},
    { name: "frijol", price:1, stock: 555},
    { name: "pimienta", price:1, stock: 999999},
    { name: "almidon", price:1, stock: 88888}
]
var temporal={id:-500, name: "almidon", price:1, stock: 88888}
function Aceptar(a){
    //data2.push(a)
    temporal.name=a.name;
    temporal.price=a.price;
    temporal.stock=a.stock;
    data2.push(Object.assign({},temporal));
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    var url = setingsu+setingsp+"/api/ingredients";
    fetch(url, {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(a),
        
      });
    data.splice(data.indexOf(a),1)
    return data
}
function Eliminar(a){
    
    data2.splice(data2.indexOf(a),1)
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    
    var url = setingsu+setingsp+"/api/ingredients/"+a.id;
    fetch(url, { method: 'DELETE' });
    return data2
}
function Abajo(){
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/ingredients")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
    data2=loadeddata;
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
                                
                                <td>{elemenento.name}</td>
                                <td>{elemenento.stock}</td>
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
                            {data2.map((elemenento2)=>(
                                <tr>
                                <td>{elemenento2.name}</td>
                                <td>{elemenento2.stock}</td>
                                <td><button type="button" onClick={()=>{(Eliminar(elemenento2));setNro2(data2.length);}} className="btn btn-danger">Eliminar</button></td>
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
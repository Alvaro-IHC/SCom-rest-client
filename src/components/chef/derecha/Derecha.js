import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'
var data2 = [
    { codigo: 1, descripcion: "papa", cantidad: "5"},
    { codigo: 2, descripcion: "frijol", cantidad: "2 latas"},
    { codigo: 3, descripcion: "pimienta", cantidad: "1/2 kilos"},
    { codigo: 4, descripcion: "almidon", cantidad: "a"}
];
var data =[
    
]
var temporal={codigo: 0, descripcion:"", cantidad:""}
function Eliminar(a){
    data.splice(a-1, 1)
    data.map((orden)=>(
        orden.codigo=data.indexOf(orden)+1
    ))
    return data
}
function getElemene(a){
    return data
}
function JsonGen1(a){
    const JsonArray = JSON.stringify(a);
    console.log(JsonArray)
}
var alreadyloaded=false
function LoaData(){
    if(!alreadyloaded){
        data=JSON.parse(JSON.stringify(data2))
    }
    alreadyloaded=true
}
function Derecha(){
    LoaData()
    const [descripcion, setD]=useState("");
    const [cantidad, setC]=useState("");
    const setDes = (e) => {
        setD(e.target.value);
    }
    const setCan = (e) => {
        setC(e.target.value);
    }
    const [nro,setNro]=useState(data.length)
    const [Solicitud,setSolicitud]=useState(data)
    return <div>
        <div class="container px-0 text-center">
        <div class="row gx-0">
            <div class="col">
            <div class="p-3 border bg-light">
            <form
                onSubmit={ev => {
                    ev.preventDefault();   
                    temporal.descripcion=descripcion;
                    temporal.cantidad=cantidad;
                    temporal.codigo=data.length+1;
                    //console.log(temporal.descripcion);
                    //console.log(temporal.cantidad);
                    //console.log(temporal.codigo);
                    data.push(Object.assign({},temporal));
                    setNro(data.length);
                }}
                ><label><b>Descripcion</b></label>  <input  id="descripcion" type="text" name="descripcion" autocomplete="off" onChange={setDes}></input>  <br></br>  <br></br>
                <label><b>Cantidad</b></label>  <input  id="cantidad" type="text" name="cantidad" autocomplete="off" onChange={setCan}></input>  <br></br> <br></br>
                <button type="reset" class="btn btn-danger">Cancelar</button>
                <button type="submit"  class="btn btn-success">Añadir</button> 
            </form>
            </div>
            </div>
        </div>
        </div>
         <br></br>
        <div class="container px-0 text-center">
        <div class="row gx-0">
            <div class="col">
            <div class="p-3 border bg-light">
                

            <b>Nro de ingredientes {nro}</b>
            <table class="table">
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
                    <td><button type="button" onClick={()=>{setSolicitud(Eliminar(elemenento.codigo));setNro(data.length);}} class="btn btn-danger">Eliminar</button></td>
                    </tr>
                ))}

            </tbody>
            </table>
            <button type="button"  class="btn btn-success" onClick={()=>JsonGen1(data)}>Solicitar</button> 

            </div>
            </div>
        </div>
        </div>


    </div>
}
export {Derecha}
export {JsonGen1}
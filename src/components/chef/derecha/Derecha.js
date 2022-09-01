import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'
var data = [
    { codigo: 1, descripcion: "papa", cantidad: "5"},
    { codigo: 2, descripcion: "frijol", cantidad: "2 latas"},
    { codigo: 3, descripcion: "pimienta", cantidad: "1/2 kilos"},
    { codigo: 4, descripcion: "almidon", cantidad: "a"}
];
var temporal={codigo: data.length, descripcion:"", cantidad:""}
function Derecha(){
    const [descripcion, setD]=useState("");
    const [cantidad, setC]=useState("");
    const setDes = (e) => {
        setD(e.target.value);
    }
    const setCan = (e) => {
        setC(e.target.value);
    }
    return <div>
        <div class="container px-4 text-center">
        <div class="row gx-5">
            <div class="col">
            <div class="p-3 border bg-light">
            <form
                onSubmit={ev => {
                    ev.preventDefault();   
                    temporal.descripcion=descripcion;
                    temporal.cantidad=cantidad;
                    temporal.codigo=temporal.codigo+1;
                    console.log(temporal.descripcion);
                    console.log(temporal.cantidad);
                    console.log(temporal.codigo);
                    data.push(Object.assign({},temporal));
                    
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
        <div class="container px-4 text-center">
        <div class="row gx-5">
            <div class="col">
            <div class="p-3 border bg-light">
                

            
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                
                {data.map((elemenento)=>(
                    <tr>
                    <td>{elemenento.codigo}</td>
                    <td>{elemenento.descripcion}</td>
                    <td>{elemenento.cantidad}</td>
                    <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                    </tr>
                ))}

            </tbody>
            </table>
            <button type="button"  class="btn btn-success">Solicitar</button> 

            </div>
            </div>
        </div>
        </div>


    </div>
}
export {Derecha}
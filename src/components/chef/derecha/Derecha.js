import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'
import {useEffect} from 'react'
var data2 = [
    { id: 1, name: "papa", stock: "5"},
    { id: 2, name: "frijol", stock: "2 latas"},
    { id: 3, name: "pimienta", stock: "1/2 kilos"},
    { id: 4, name: "almidon", stock: "a"}
];
var data =[
    
]
var temporal={
    id: 0,
    name: "string",
    price: 0,
    stock: 0
  }
function Eliminar(a){
    data.splice(a-1, 1)
    data.map((orden)=>(
        orden.id=data.indexOf(orden)+1
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
    const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch("http://localhost:8081/api/ingredients")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
    data=loadeddata
    const [name, setD]=useState("");
    const [stock, setC]=useState("");
    const setDes = (e) => {
        setD(e.target.value);
    }
    const setCan = (e) => {
        setC(e.target.value);
    }
    const [nro,setNro]=useState(data.length)
    const [Solicitud,setSolicitud]=useState(data)
    return <div>
        <div className="container px-0 text-center">
        <div className="row gx-0">
            <div className="col">
            <div className="p-3 border bg-light">
            <form
                onSubmit={ev => {
                    ev.preventDefault();   
                    temporal.name=name;
                    temporal.stock=stock;
                    temporal.id=data.length+1;
                    //console.log(temporal.name);
                    //console.log(temporal.stock);
                    //console.log(temporal.id);
                    data.push(Object.assign({},temporal));
                    setNro(data.length);
                }}
                ><label><b>name</b></label>  <input  id="name" type="text" name="name" autocomplete="off" onChange={setDes}></input>  <br></br>  <br></br>
                <label><b>stock</b></label>  <input  id="stock" type="text" name="stock" autocomplete="off" onChange={setCan}></input>  <br></br> <br></br>
                <button type="reset" className="btn btn-danger">Cancelar</button>
                <button type="submit"  className="btn btn-success">Añadir</button> 
            </form>
            </div>
            </div>
        </div>
        </div>
         <br></br>
        <div className="container px-0 text-center">
        <div className="row gx-0">
            <div className="col">
            <div className="p-3 border bg-light">
                

            <b>Nro de ingredientes {nro}</b>
            <table className="table">
            <thead>
                <tr>
                
                <th scope="col">name</th>
                <th scope="col">stock</th>
                <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                
                {Solicitud.map((elemenento)=>(
                    <tr>
                    
                    <td>{elemenento.name}</td>
                    <td>{elemenento.stock}</td>
                    <td><button type="button" onClick={()=>{setSolicitud(Eliminar(elemenento.id));setNro(data.length);}} className="btn btn-danger">Eliminar</button></td>
                    </tr>
                ))}

            </tbody>
            </table>
            <button type="button"  className="btn btn-success" onClick={()=>JsonGen1(data)}>Solicitar</button> 

            </div>
            </div>
        </div>
        </div>


    </div>
}
export {Derecha}
export {JsonGen1}
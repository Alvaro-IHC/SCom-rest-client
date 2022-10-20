import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'
import {useEffect} from 'react'
import settings from './../../../settings.json'
var setings={}
var data2 = [
    { id: 1, name: "papa", stock: "5"},
    { id: 2, name: "frijol", stock: "2 latas"},
    { id: 3, name: "pimienta", stock: "1/2 kilos"},
    { id: 4, name: "almidon", stock: "a"}
];
var data =[
    
]
var temporal={
    amount: 0,
      name: "string",
      price: 0,
      stock: 0
  }
var newIngredients=[]
var oldIngredients=[]
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
function JsonGen1(b){
    var a = {name:"", price:0, stock:0}
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    var url = setingsu+setingsp+"/api/ingredients";
    b.map((elemenentox)=>{
        a.name=elemenentox.name;
        a.price = elemenentox.price;
        a.stock = elemenentox.stock;
        fetch(url, {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(a),
            
        });
});
    
    const JsonArray = JSON.stringify(b);
    console.log(JsonArray)
}
function JsonGen2(newI, oldI){
    var obj={
        chefId: 3,
        ingredients: oldI,
        newIngredients: newI
    }
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    var url = setingsu+setingsp+"/api/ingredients/request";
    console.log(JSON.stringify(obj));
    fetch(url, {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(obj),
        
      });
}
var alreadyloaded=false
function LoaData(){
    if(!alreadyloaded){
        data=JSON.parse(JSON.stringify(data2))
    }
    alreadyloaded=true
}
function Modificar(dato, cantidad){
    console.log(cantidad)
    var itwasnew=false;
    newIngredients.map((ingrediente)=>{
        if(ingrediente===dato){
            dato.ammount=cantidad;
            itwasnew=true;
        }
    });
    data.map((ingrediente)=>{
        if(ingrediente===dato){
            dato.ammount=cantidad;
        }
    }); 
    if(!itwasnew){
        oldIngredients.push({
            amount: parseInt(cantidad),
            id: dato.id
        })
        console.log(oldIngredients)
    }
}
function Derecha(){
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    
    const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/ingredients")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
    data=loadeddata
    const [name, setD]=useState("");
    const [stock, setC]=useState("");
    const [precio, setP]=useState("");
    const setDes = (e) => {
        setD(e.target.value);
    }
    const setCan = (e) => {
        setC(e.target.value);
    }
    const setPres = (e) => {
        setP(e.target.value);
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
                    temporal.price=precio;
                    //console.log(temporal.name);
                    //console.log(temporal.stock);
                    //console.log(temporal.id);
                    data.push(Object.assign({},temporal));
                    newIngredients.push(Object.assign({},temporal));
                    setNro(data.length);
                }}
                ><label><b>name</b></label>  <input  id="name" type="text" name="name" autocomplete="off" onChange={setDes}></input>  <br></br>  <br></br>
                <label><b>cantidad</b></label>  <input  id="stock" type="text" name="stock" autocomplete="off" onChange={setCan}></input>  <br></br> <br></br>
                <label><b>precio</b></label>  <input  id="stock" type="text" name="stock" autocomplete="off" onChange={setPres}></input>  <br></br> <br></br>
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
                <th scope="col">cantidad</th>
                <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                
                {data.map((elemenento)=>(
                    <tr>
                    
                    <td>{elemenento.name}</td>
                    <td>{elemenento.stock}</td>
                    <td><input  id="price2" type="text" name="price2" autoComplete="off" placeholder={elemenento.stock}></input></td>
                    <td><button type="button" onClick={()=>{Modificar(elemenento,document.getElementById("price2").value)}} className="btn btn-success">Adicionar</button></td>
                    </tr>
                ))}

            </tbody>
            </table>
            <button type="button"  className="btn btn-success" onClick={()=>JsonGen2(newIngredients,oldIngredients)}>Solicitar</button> 

            </div>
            </div>
        </div>
        </div>


    </div>
}
export {Derecha}
export {JsonGen1}
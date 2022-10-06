import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'
import {useEffect} from 'react'


var infocentro ={
    orden: "Informacion de la orden.",
    nomborden: " X"
}
var Data_products = [
  
]
var Data_products2 = [
    
]
var PedAct=
  {
    bill: {
      id: 0
    },
    chef: {
      "id": 0
    },
    customer: {
      id: 0
    },
    date: "2022-10-05T17:17:33.273Z",
    id: 0,
    products: [
      {
        amount: 0,
        description: "string",
        id: 0,
        nameOrBrand: "string",
        type: "string"
      }
    ],
    table: {
      capacity: 0,
      id: 0,
      number: "string"
    }
        }
function CPedAct(a){
    PedAct=a
}
function cancelar(){
    const JsonReloa = JSON.stringify(Data_products2);
    Data_products=JSON.parse(JsonReloa)
    const JsonCancelar = JSON.stringify(PedAct);
    console.log(JsonCancelar)
    
}
function Enviar(){
    const JsonEnviar = JSON.stringify(PedAct);
    console.log(JsonEnviar)
    const JsoneIzent = JSON.stringify(Data_products2);
    
    Data_products=JSON.parse(JsoneIzent)
    
}


function Formatear(a,b){
    infocentro.nomborden=a
    var texto=""

    b.map((orden)=>(
        texto=texto+"\n"+"tipo: "+orden.type+"\n Nombre: "+orden.nameOrBrand+"\n Cantidad: "+orden.amount
    ))
    infocentro.orden=texto
    return texto
}
var alreadyloaded=false
function LoaData(){
    if(!alreadyloaded){
        Data_products=JSON.parse(JSON.stringify(Data_products2))
    }
    alreadyloaded=true
}
var temporal=
  {
    bill: {
      id: 0
    },
    chef: {
      "id": 0
    },
    customer: {
      id: 0
    },
    date: "2022-10-05T17:17:33.273Z",
    id: 0,
    products: [
      {
        amount: 0,
        description: "string",
        id: 0,
        nameOrBrand: "string",
        type: "string"
      }
    ],
    table: {
      capacity: 0,
      id: 0,
      number: "string"
    }
  }
var alreadyloaded2=false;
function LoaData2(data){
    if(!alreadyloaded2){
        {data.map((elemenento)=>{
            temporal=elemenento;
            Data_products2.push(Object.assign({},temporal));
            
        })}
        alreadyloaded2=true;
    }
    
}
var alreadyRecovery=false;
function DataRecovery(){
    
      
        
    
    alreadyRecovery=true;
}
function Izquierda(){
    //const JsoneIzent = JSON.stringify(Data_products2);
    //Data_products=JSON.parse(JsoneIzent)
    const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch("http://localhost:8081/api/orders")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
    Data_products=loadeddata
    
    //console.log(JSON.stringify(Data_products))
    
    const [orden,setOrden]=useState("informacion de la orden")
    const [enviado,setEnvi]=useState(0)
    const [cancelados,setCance]=useState(0)
    return <div>
        
        <div className="container px-0 text-center">
            <div className="row gx-0">
                <div className="col">
                    <div className="p-3 border bg-light">
                        <b>Mesa {infocentro.nomborden} </b>
                        
                        
                        <br></br>
                        <p>{orden}</p>
                        
                        <button type="button" className="btn btn-danger" onClick={()=>{cancelar();setCance(cancelados+1)}}>Cancelar</button>
                        <button type="button" className="btn btn-success" onClick={()=>{Enviar();setEnvi(enviado+1)}}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container px-0 text-center">
        <div className="row gx-0">
            <div className="col">
            <div className="p-3 border bg-light">
                

            
            <table className="table">
                <tbody>
                    {Data_products.map((elemenento)=>(
                        <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-warning btn-lg" onClick={()=>{Formatear(elemenento.table.id, elemenento.products);CPedAct(elemenento);setOrden(Formatear(elemenento.table.id, elemenento.products));}}>Mesa {elemenento.table.id}</button></td>
                        </tr>
                    ))}

                </tbody>
        </table>

            </div>
            </div>
        </div>
        </div>    
        
    </div>
}

export {Izquierda}
export {Data_products}
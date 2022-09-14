import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'

import {JsonGen1} from "./../derecha/Derecha"

var infocentro ={
    orden: "Informacion de la orden.",
    nomborden: " X"
}
var Data_pedido = [
    
]
var Data_pedido2 = [
    {mesa: 1, pedido: [{tipo: "comida", nombre:"milanesa de pollo",cantidad: 1, ingredientes:["pechuga", "huevo", "sal", "pimienta", "pan molido"]}]},
    {mesa: 2, pedido: [{tipo: "jugo", nombre:"cocacola", cantidad: 1, ingredientes:["N/A"]},{tipo: "jugo", nombre:"fanta", cantidad: 1, ingredientes:["N/A"]}]}
]
var PedAct={mesa: -1, pedido: [{tipo: "", nombre:"",cantidad: 0, ingredientes:[""]}]}
function CPedAct(a){
    PedAct=a
}
function cancelar(){
    const JsonReloa = JSON.stringify(Data_pedido2);
    Data_pedido=JSON.parse(JsonReloa)
    const JsonCancelar = JSON.stringify(PedAct);
    console.log(JsonCancelar)
    
}
function Enviar(){
    const JsonEnviar = JSON.stringify(PedAct);
    console.log(JsonEnviar)
    const JsoneIzent = JSON.stringify(Data_pedido2);
    
    Data_pedido=JSON.parse(JsoneIzent)
    
}


function Formatear(a,b){
    infocentro.nomborden=a
    var texto=""

    b.map((orden)=>(
        texto=texto+"\n"+"Tipo: "+orden.tipo+"\n Nombre: "+orden.nombre+"\n Cantidad: "+orden.cantidad+"\n Ingredientes: " +orden.ingredientes.map((ingrediente)=>(" "+ingrediente))
    ))
    infocentro.orden=texto
    return texto
}
var alreadyloaded=false
function LoaData(){
    if(!alreadyloaded){
        Data_pedido=JSON.parse(JSON.stringify(Data_pedido2))
    }
    alreadyloaded=true
}
function Izquierda(){
    //const JsoneIzent = JSON.stringify(Data_pedido2);
    //Data_pedido=JSON.parse(JsoneIzent)
    LoaData()
    const [orden,setOrden]=useState("informacion de la orden")
    const [enviado,setEnvi]=useState(0)
    const [cancelados,setCance]=useState(0)
    return <div>
        
        <div class="container px-0 text-center">
            <div class="row gx-0">
                <div class="col">
                    <div class="p-3 border bg-light">
                        <b>Mesa {infocentro.nomborden} </b>
                        
                        
                        <br></br>
                        <p>{orden}</p>
                        
                        <button type="button" class="btn btn-danger" onClick={()=>{cancelar();setCance(cancelados+1)}}>Cancelar</button>
                        <button type="button" class="btn btn-success" onClick={()=>{Enviar();setEnvi(enviado+1)}}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-0 text-center">
        <div class="row gx-0">
            <div class="col">
            <div class="p-3 border bg-light">
                

            
            <table class="table">
                <tbody>
                    {Data_pedido.map((elemenento)=>(
                        <tr>
                        <td></td>
                        <td><button type="button" class="btn btn-warning btn-lg" onClick={()=>{Formatear(elemenento.mesa, elemenento.pedido);CPedAct(elemenento);setOrden(Formatear(elemenento.mesa, elemenento.pedido));}}>mesa {elemenento.mesa}</button></td>
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
export {Data_pedido}
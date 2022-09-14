import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {Izquierda, Data_pedido} from "./../Izquierda/Izquierda"
import {useState} from 'react'
var food2=[
    {id: 1, nombre:"milanesa",tipo:"comida",  ingredientes:["pechuga", "huevo", "sal", "pimienta", "pan molido"], estado:false},
    {id: 2, nombre:"alfajor",tipo:"comida",  ingredientes:["arina","chocolate", "dulce de leche"], estado:true},
    {id: 3, nombre:"cocacola",tipo:"jugo",  ingredientes:["N/A"], estado:false}
]
var food=[
    
]
const infoplato={
    nombre:"Nombre Del plato",
    ingredientes:"N/A",
    estado:"agotado"
}
var pActual={id: -1, nombre:"",tipo:"", ingredientes:["N/A"], estado:false}
function SetAct(a){
    pActual=a
    
}
function sta(a){
    if (a){
        return "disponible"
    }else{
        return "agotado"
    }
}
function Change(a){
    if(food[food.indexOf(a)].estado==false){
        food[food.indexOf(a)].estado=true
    }else{
        food[food.indexOf(a)].estado=false
    }
    const Jsonestado = JSON.stringify(pActual);
    console.log(Jsonestado)
    //console.log("------------carga----------------")
    //console.log(JSON.stringify(food))
}
function Formatear(a,b,c){
    infoplato.nombre=a;
    
    infoplato.ingredientes=b.map((ingrediente)=>(ingrediente+", "));
    infoplato.estado=c;
    return a
}
function gete(a){
    return a
}
var alreadyloaded=false
function LoaData(){
    if(!alreadyloaded){
        food=JSON.parse(JSON.stringify(food2))
    }
    alreadyloaded=true
}

function Centro(){
    
    LoaData()
    
    const [plato,setPlato]=useState(false)
    const [nomp,setNom]=useState("Nombre Plato")
    return <div>
        <div class="container px-0 text-center">
            <div class="row gx-0">
                <div class="col">
                    <div class="p-3 border bg-light">
                        <b>{nomp}<br /></b>
                        <b>Ingredientes:<br /></b>
                        <p>{infoplato.ingredientes}<br /></p>
                        <b>Estado anterior<br /></b>
                        <p>{sta(plato)}<br /> </p>
                        
                        
                    </div>
                </div>
            </div>
        </div>  
        <div class="container px-0 text-center">
            <div class="row gx-0">
                <div class="col">
                    <div class="p-3 border bg-light">
                        

                    <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">nombre</th>
                                
                                <th scope="col">estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {food.map((elemenento)=>(
                                    
                                    <tr>
                                    <td>{elemenento.id}</td>
                                    <td>{elemenento.nombre}</td>
                                    
                                    <td><button type="button" onClick={()=>{Formatear(elemenento.nombre, elemenento.ingredientes, elemenento.estado);setNom(Formatear(elemenento.nombre, elemenento.ingredientes, elemenento.estado));setPlato(gete(elemenento.estado));SetAct(elemenento);Change(elemenento)}} class="btn btn-info">{sta(elemenento.estado)}</button></td>
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
export{Centro}

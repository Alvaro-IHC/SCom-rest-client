import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import {Izquierda, Data_pedido} from "./../Izquierda/Izquierda"
import {useState} from 'react'
import {useEffect} from 'react'
import settings from './../../../settings.json'
var setings={}
var food2=[
    {id: 1, name:"milanesa",type:"comida",  ingredients:["pechuga", "huevo", "sal", "pimienta", "pan molido"], available:false},
    {id: 2, name:"alfajor",type:"comida",  ingredients:["arina","chocolate", "dulce de leche"], available:true},
    {id: 3, name:"cocacola",type:"jugo",  ingredients:["N/A"], available:false}
]
var food=[
    
]
var drink=[]
const infoplato={
    name:"name Del plato",
    ingredients:"N/A",
    available:"agotado"
}
var pActual={
    available: true,
    id: 0,
    ingredients: [
      {
        amount: 0,
        ingredient: {
          chefs: [
            {
              chef: {
                address: "string",
                email: "string",
                fatherLastname: "string",
                healthCode: "string",
                id: 0,
                motherLastname: "string",
                name: "string",
                nationality: "string",
                role: "string",
                salary: 0,
                specialty: "string",
                username: "string"
              },
              date: "2022-10-05T17:58:06.838Z",
              id: {},
              ingredient: {
                chefs: [
                  null
                ],
                id: 0,
                name: "string",
                price: 0,
                stock: 0
              }
            }
          ],
          id: 0,
          name: "string",
          price: 0,
          stock: 0
        }
      }
    ],
    name: "string",
    price: 0,
    type: "string",
    urlImage: "string"
  }
var pActual2={}
function SetAct(a){
    pActual=a
    
}
function SetAct2(a){
    pActual2=a
    
}
function sta(a){
    if (a){
        return "disponible"
    }else{
        return "agotado"
    }
}
var forchange1={
    available: true,
    id: 0
  }
function Change2(a){
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    if(drink[drink.indexOf(a)].available==false){
        drink[drink.indexOf(a)].available=true
    }else{
        drink[drink.indexOf(a)].available=false
    }
    forchange1.available= pActual2.available;
    forchange1.id= pActual2.id;
    const Jsonavailable = JSON.stringify(forchange1);
    console.log(Jsonavailable)
    var url = setingsu+setingsp+"/api/products/"+forchange1.id;
    fetch(url, {
        headers: { "Content-type": "application/json" },
        method: "PATCH",
        body: Jsonavailable,
        
      });
    //console.log("------------carga----------------")
    //console.log(JSON.stringify(food))
}
function Change(a){
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    if(food[food.indexOf(a)].available==false){
        food[food.indexOf(a)].available=true
    }else{
        food[food.indexOf(a)].available=false
    }
    forchange1.available= pActual.available;
    forchange1.id= pActual.id;
    const Jsonavailable = JSON.stringify(forchange1);
    console.log(Jsonavailable)
    var url = setingsu+setingsp+"/api/products/"+forchange1.id;
    fetch(url, {
        headers: { "Content-type": "application/json" },
        method: "PATCH",
        body: Jsonavailable,
        
      });
    //console.log("------------carga----------------")
    //console.log(JSON.stringify(food))
}
function Formatear(a,b,c){
    infoplato.name=a;
    
    infoplato.ingredients=b.map((ingrediente)=>(ingrediente.name+", "));
    infoplato.available=c;
    return a
}
function Formatear2(a,b){
    infoplato.name=a;
    
    
    infoplato.available=b;
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
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/foods")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
    food=loadeddata;
    const [loadeddata3, setloadeddata3] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/drinks")
      .then(response => response.json())
      .then(data => setloadeddata3(data));
      
    },[])
  drink=loadeddata3;
    
    const [plato,setPlato]=useState(false)
    const [nomp,setNom]=useState("name Plato")
    return <div>
        <div class="container px-0 text-center">
            <div class="row gx-0">
                <div class="col">
                    <div class="p-3 border bg-light">
                        <b>{nomp}<br /></b>
                        <b>ingredients:<br /></b>
                        <p>{infoplato.ingredients}<br /></p>
                        <b>available anterior<br /></b>
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
                                <th scope="col">name</th>
                                
                                <th scope="col">available</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {food.map((elemenento)=>(
                                    
                                    <tr>
                                    <td>{elemenento.id}</td>
                                    <td>{elemenento.name}</td>
                                    
                                    <td><button type="button" onClick={()=>{Formatear(elemenento.name, elemenento.ingredients, elemenento.available);setNom(Formatear(elemenento.name, elemenento.ingredients, elemenento.available));setPlato(gete(elemenento.available));SetAct(elemenento);Change(elemenento)}} class="btn btn-info">{sta(elemenento.available)}</button></td>
                                    </tr>
                                ))}
                                {drink.map((elemenento)=>(
                                    
                                    <tr>
                                    <td>{elemenento.id}</td>
                                    <td>{elemenento.brand}</td>
                                    
                                    <td><button type="button" onClick={()=>{Formatear2(elemenento.brand,  elemenento.available);setNom(Formatear2(elemenento.name, elemenento.available));setPlato(gete(elemenento.available));SetAct2(elemenento);Change2(elemenento)}} class="btn btn-info">{sta(elemenento.available)}</button></td>
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

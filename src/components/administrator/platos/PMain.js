import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Abajo from "./Abajo/Abajo"
import {useEffect} from 'react'
import settings from  './../../../settings.json'
//import Mcrear from './Modal/Mcrear'
var data_platos=[
  
]
var data_ingredientes=[

]
var data_bebidas=[]
var temporal=  {
  
    available: true,
    imageId: 1,
    ingredients: [
      {
        amount: 0,
        id: 0
      }
    ],
    name: "string",
    newIngredients: [
      {
        amount: 0,
        name: "string",
        price: 0,
        stock: 0
      }
    ],
    price: 0,
    type: "string"
  
}
var temporal2={
  availabl: true,
  imageId: 0,
  ingredients: [
  ],
  name: "string",
  newIngredients: [
  ],
  price: 0,
  type: "string"
}
var temporal3={
  
    alcoholicGrade: "string",
    available: true,
    brand: "string",
    deleted: false,
    description: "string",
    imageId: 0,
    price: 0,
    volume: 0
  
}  
function Eliminar(a){
    data_platos.splice([data_platos.indexOf(a)], 1)
    const setingsu=settings.url;
    const setingsp=settings.puerto;
    var url = setingsu+setingsp+"/api/products/"+a.id;
    fetch(url, {
  
        method: "DELETE"
        
      });
}
function Eliminar2(a){
  data_bebidas.splice([data_bebidas.indexOf(a)], 1)
  const setingsu=settings.url;
  const setingsp=settings.puerto;
  var url = setingsu+setingsp+"/api/products/"+a.id;
  fetch(url, {

      method: "DELETE"
      
    });
}
function Editar(temp,id){
  var counter=0;
  data_platos.map((dato)=>{
  
    if(dato.id===id){
      console.log("found");
      id=dato.id;
      if(temp.name===""){
        temp.name=data_platos[counter].name;
      }if(temp.type===""){
        temp.type=data_platos[counter].type;
      }if(temp.price===""){
        temp.price=data_platos[counter].price;
      }if(temp.imageId===0){
        temp.imageId=data_platos[counter].imageId;
      }
        data_platos[counter]=Object.assign({},temp); 
          
    }
    counter++;
  })
  const setingsu=settings.url;
  const setingsp=settings.puerto;
  var url = setingsu+setingsp+"/api/foods/"+id;
  console.log(Object.assign({},temp))
  fetch(url, {
      headers: { "Content-type": "application/json" },
      method: "PUT",
      body: JSON.stringify(Object.assign({},temp)),
      
    });




  temp={
    availabl: true,
    imageId: 0,
    ingredients: [
    ],
    name: "string",
    newIngredients: [
    ],
    price: 0,
    type: "string"
  }
}
function Editar2(temp, id){
  var counter=0;
  data_bebidas.map((dato)=>{
  
    if(dato.id===id){
      console.log("found");
      id=dato.id;
      if(temp.alcoholicGrade===""){
        temp.alcoholicGrade=data_bebidas[counter].alcoholicGrade;
      }if(temp.brand===""){
        temp.brand=data_bebidas[counter].brand;
      }if(temp.description===""){
        temp.description=data_bebidas[counter].description;
      }if(temp.price===""){
        temp.price=data_bebidas[counter].price;
      }if(temp.volume===""){
        temp.volume=data_bebidas[counter].volume;
      }if(temp.imageId===0){
        temp.imageId=data_bebidas[counter].imageId;
      }
        data_bebidas[counter]=Object.assign({},temp);   
    }
    counter++;
  })
  const setingsu=settings.url;
  const setingsp=settings.puerto;
  var url = setingsu+setingsp+"/api/drinks/"+id;
  console.log(Object.assign({},temp))
  fetch(url, {
      headers: { "Content-type": "application/json" },
      method: "PUT",
      body: JSON.stringify(Object.assign({},temp)),
      
    });

    temporal3={
  
      alcoholicGrade: "string",
      available: true,
      brand: "string",
      deleted: false,
      description: "string",
      imageId: 0,
      price: 0,
      volume: 0
    
  }  
}
function Miniformat(a,c,d,e){
  return(
    {
      amount: a,
      
        name: c,
        price: d,
        stock: e
      
    }
  )
}
function EstoNoEsInutil(x){

  var v=x;
  return ["Adicionar"];
}
var poradi=[]
function AdicionarCreacion(adicionar, elemenentox, cantidad){
  var aux = Object.assign({},adicionar)
  //console.log(elemenentox);
  var amo=elemenentox.stock;
  var idd=elemenentox.id;                                    
  if(adicionar[data_ingredientes.indexOf(elemenentox)]==="Adicionar"){
    //setIngP(ingredientesP.concat(elemenentox));
    //console.log("entro");
    console.log(cantidad);
    if(cantidad===''){
      poradi.push({amount: 1, id: idd});
    }else{
      poradi.push({amount: cantidad, id: idd});
    }
    

    aux[data_ingredientes.indexOf(elemenentox)]="Adicionado";
    return(aux);
  }else{
    //setIngP(ingredientesP.splice(ingredientesP.indexOf(elemenentox)));
    //console.log("entro");
    poradi.splice(poradi.elemenentox,1)

    aux[data_ingredientes.indexOf(elemenentox)]="Adicionar";
    return(aux);

  }

}
var imgdata={id:0}
function sethc(a){
  imgdata=a;
}
function recovery(a){
  var heavycopy={}
  console.log("im in ;)");
  //console.log(sending);
  //console.log(a);
  var formData = new FormData();
  
  formData.append("file", a.target.files[0]);
  
  const setingsu=settings.url;
  const setingsp=settings.puerto;
  var url = setingsu+setingsp+"/api/images";
  
  fetch(url, {
    method: 'POST',
    body: formData,
    redirect: 'follow'
    
  }).then(response => response.json())
  .then(data => sethc(JSON.parse(JSON.stringify(Object.assign({},data)))))
  .catch(error => console.log('error', error));
  console.log(imgdata);
}
async function Sendimage(a){
  var heavycopy={}
  console.log("im in ;)");
  //console.log(sending);
  //console.log(a);
  var formData = new FormData();
  
  formData.append("file", a.target.files[0]);
  
  const setingsu=settings.url;
  const setingsp=settings.puerto;
  var url = setingsu+setingsp+"/api/images";
  
  const resp = await fetch(url, {
    method: 'POST',
    body: formData,
    redirect: 'follow'
    
  })
  const data = await resp.json();
  sethc(Object.assign({},data));
  console.log(imgdata);
}
function getdoc(a){
  return a
}
function PMain(){
  const setingsu=settings.url;
  const setingsp=settings.puerto;
  const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/foods")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
  data_platos=loadeddata;
  const [loadeddata2, setloadeddata2] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/ingredients")
      .then(response => response.json())
      .then(data => setloadeddata2(data));
      
    },[])
  data_ingredientes=loadeddata2;
  const [loadeddata3, setloadeddata3] = useState([]);
    useEffect(()=>{
      
      fetch(setingsu+setingsp+"/api/drinks")
      .then(response => response.json())
      .then(data => setloadeddata3(data));
      
    },[])
  data_bebidas=loadeddata3;
  const [show, setShow] = useState(false);
  const [nro,setNro]=useState(data_platos.length);
  const [nro6,setNro6]=useState(data_bebidas.length);
  const [name, setN]=useState("");
  const [type, setT]=useState("");
  const [descripcion2, setD2]=useState("");
  const [price, setP]=useState("");
  const [id, setI]=useState(0);
  const [imag, setIm]= useState("");
  const [adicionar, setAdicionar]= useState([]);
  const [counter, setcounter]= useState(-1);
  const [ingi, setIngi]= useState({
    
  });
  const [ingredientesP, setIngP]= useState([]);
  const [ing, setIn]= useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)};
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const [nrox, setNrox]=useState(0);
  const [volume, setvol]=useState(0);
  const [ediIngredient, setedii]=useState([]);
  return(
      <div>
        <h1 className="title_jv_adm">Platos</h1>
          <div className="row g-0 text-center">
          <div className="col-sm-6 col-md-8 border bg-light">
          <table className="table">
                  <thead>
                  <tr>
                      <th>id</th>                      
                      <th>Nombre</th>
                      <th>Imagen</th>
                      <th>Tipo</th>
                      <th>Precio</th>
                      <th>Accion</th>
                  </tr>
                  </thead>

                  <tbody>
                  {data_platos.map((dato) => (
                      <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.name}</td>
                      <td><img width="100" class="img-fluid" src={dato.urlImage} alt="Responsive image"></img></td>
                      <td>{dato.type}</td>
                      <td>{dato.price}</td>
                      <td>
                      <button type="button" className="btn btn-primary" onClick={()=>{
                         var addg=[]
                    
                         for (let i = 0; i < data_ingredientes.length; i++) {
                           addg.push("Adicionar")
                         }; 
                         if(addg.length>0){
                           setAdicionar(Object.assign({},addg));
                         }else{
                           for (let i = 0; i < data_ingredientes.length; i++) {
                             addg.push("Adicionar")
                           };}; 
                        setAdicionar(Object.assign({},addg));
                        imgdata={}; poradi=[];
                        setIn([]);
                        setI(dato.id);
                        setedii(dato.ingredients);setIm(dato.urlImage);setI(dato.id);setN(dato.name);setT(dato.type);setP(dato.price);setShow2(true);temporal.id=dato.id}}>
                        Editar 
                      </button>

                      
                          {" "}
                      <button type="button" className="btn btn-danger" onClick={()=>{setIm(dato.urlImage);Eliminar(dato); setNro(data_platos.length+data_bebidas.lenght)}}>Eliminar</button>
                      
                      </td>
                      </tr>
                  ))}
                  {data_bebidas.map((dato3) => (
                      <tr key={dato3.id}>
                      <td>{dato3.id}</td>
                      <td>{dato3.brand}</td>
                      <td><img width="100" class="img-fluid" src={dato3.urlImage} alt="Responsive image"></img></td>
                      <td>{dato3.alcoholicGrade}</td>
                      <td>{dato3.price}</td>
                      <td>
                      <button type="button" className="btn btn-primary" onClick={()=>{imgdata={}; poradi=[];setD2(dato3.description);setvol(dato3.volume) ; setIm(dato3.urlImage);setI(dato3.id);setN(dato3.brand);setT(dato3.alcoholicGrade);setP(dato3.price);setShow3(true);temporal.id=dato3.id}}>
                        Editar 
                      </button>

                      
                          {" "}
                      <button type="button" className="btn btn-danger" onClick={()=>{setIm(dato3.urlImage);Eliminar2(dato3); setNro(data_platos.length+data_bebidas.lenght)}}>Eliminar</button>
                      
                      </td>
                      </tr>
                  ))}
                  </tbody>
          </table>
          <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Bebida {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form
                    onSubmit={ev => {
                        ev.preventDefault();
                           
                        temporal3.brand=document.getElementById("brand2").value;
                        temporal3.alcoholicGrade=document.getElementById("alcoholicGrade2").value;
                        temporal3.price=document.getElementById("price3").value;
                        temporal3.volume=document.getElementById("volume2").value;
                        temporal3.description=document.getElementById("desc2").value;
                        if(imgdata.id!=undefined){
                          temporal3.imageId=imgdata.id;
                        }else{
                          temporal3.imageId=0;
                        }
                        
                        //console.log(temporal2);
                        //console.log(temporal.name);
                        Editar2(temporal3,id);
                        //data_platos.push(Object.assign({},temporal));
                        setNro6(data_platos.length);
                        setShow3(false);
                    }}
                    >
                    <label><b>Nombre de la bebida </b></label>  <input  id="brand2" type="text" name="brand2" autoComplete="off" placeholder={name}></input>  <br></br>  <br></br>
                    <label><b>Volumen de la bebida </b></label>  <input  id="volume2" type="text" name="volume2" autoComplete="off" placeholder={volume}></input>  <br></br>  <br></br>
                    <label><b>Grado alcoholico</b></label>  <input  id="alcoholicGrade2" type="text" name="alcoholicGrade2" autoComplete="off" placeholder={type}></input>  <br></br> <br></br>
                    <label><b>Precio de la bebida</b></label>  <input  id="price3" type="text" name="price3" autoComplete="off" placeholder={price}></input>  <br></br> <br></br>
                    <label><b>Descripcion de la bebida</b></label>  <input  id="desc2" type="text" name="desc2" autoComplete="off" placeholder={descripcion2}></input>  <br></br> <br></br>
                    <label for="formFile" class="form-label"><b>Cambiar Imagen</b> <br></br><br></br><img  className="img-fluid" src={imag} alt="Responsive image"></img></label><br></br> <br></br>
                    <label><input class="form-control" type="file" id="formFile" onChange={(e)=>{Sendimage(e)}}></input></label><br></br> <br></br>
                      <br></br><br></br>
                    <button type="reset" className="btn btn-danger" onClick={handleClose3}>Cancelar</button>
                    <button type="submit"  className="btn btn-success">Modificar</button> 
                  </form>
                </Modal.Body>
              </Modal>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Plato {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form
                    onSubmit={ev => {
                        ev.preventDefault();
                           
                        temporal2.name=document.getElementById("name2").value;
                        temporal2.type=document.getElementById("type2").value;
                        temporal2.price=document.getElementById("price2").value;
                        if(imgdata.id!=undefined){
                          temporal2.imageId=imgdata.id;
                        }else{
                          temporal2.imageId=0;
                        }
                        
                        temporal2.ingredients=poradi;
                        temporal2.newIngredients=ing;
                        //console.log(temporal2);
                        //console.log(temporal.name);
                        Editar(temporal2,id);
                        //data_platos.push(Object.assign({},temporal));
                        setNro(data_platos.length);
                        setShow2(false);
                    }}
                    >
                    <label><b>Nombre del plato </b></label>  <input  id="name2" type="text" name="name2" autoComplete="off" placeholder={name}></input>  <br></br>  <br></br>
                    <label><b>Tipo de plato</b></label>  <input  id="type2" type="text" name="type2" autoComplete="off" placeholder={type}></input>  <br></br> <br></br>
                    <label><b>Precio del plato</b></label>  <input  id="price2" type="text" name="price2" autoComplete="off" placeholder={price}></input>  <br></br> <br></br>
                    <label for="formFile" class="form-label"><b>Cambiar Imagen</b> <br></br><br></br><img  className="img-fluid" src={imag} alt="Responsive image"></img></label><br></br> <br></br>
                    <label><b>Ingredientes actuales</b></label><br></br> <br></br>
                    <label><input class="form-control" type="file" id="formFile" onChange={(e)=>{Sendimage(e)}}></input></label><br></br> <br></br>
                      <div class="container px-4 text-center">
                        <div class="row gx-5">
                          <div class="col">
                          <div class="p-3 border bg-light">
                          <table className="table">
                            <thead>
                                <tr>
                                
                                
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ediIngredient.map((elemenentoz)=>(
                                    <tr>
                                    
                                    <td>{elemenentoz.ingredient.name}</td>
                                    <td>{elemenentoz.amount}</td>
                                    
                                    </tr>
                                ))}

                            </tbody>
                            </table> 
                          </div>
                          </div>
                          
                        </div>
                      </div>
                      <label><b>Ingredientes disponibles</b></label><br></br> <br></br>
                      <div class="container px-4 text-center">
                        <div class="row gx-5">
                          <div class="col">
                          <div class="p-3 border bg-light">
                          <table className="table">
                            <thead>
                                <tr>
                                
                                
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {data_ingredientes.map((elemenentox)=>(
                                    
                                    <tr>
                                    
                                    <td>{elemenentox.name}</td>
                                    <td><input  id="price5" type="text" name="price5" autoComplete="off"></input></td>
                                    <td><button type="button"  className="btn btn-danger" onClick={()=>{
                                      //console.log(getdoc(document.getElementById("price5").value));
                                      
                                      setAdicionar(AdicionarCreacion(adicionar,elemenentox,document.getElementById("price5").value));
                                      //console.log(poradi)
                                      
                                      }}>{adicionar[data_ingredientes.indexOf(elemenentox)]}</button></td>
                                    </tr>
                                ))}

                            </tbody>
                            </table> 
                          </div>
                          </div>
                          
                        </div>
                      </div>                  


                      <label><b>Insertar ingredientes</b></label> <br></br> <br></br>
                      
                      <label>Nombre ingrediente</label> <br></br> 
                      <input id="Ningrediente" type="text" name="Ningrediente" autoComplete='off'></input><br></br> <br></br>
                      <label>Precio ingrediente</label> <br></br> 
                      <input id="Pingrediente" type="text" name="Pingrediente" autoComplete='off'></input><br></br> <br></br>
                      <label>Stock ingrediente</label> <br></br> 
                      <input id="Singrediente" type="text" name="Singrediente" autoComplete='off'></input><br></br> <br></br>
                      <label>Cantidad para el plato</label> <br></br> 
                      <input id="Cingrediente" type="text" name="Cingrediente" autoComplete='off'></input><br></br> <br></br>
                      <label><button type="button" className="btn btn-success" onClick={()=>{
                        
                        //console.log("Antes----------");
                        //console.log(JSON.stringify(ingi));
                        setIngi(Miniformat(document.getElementById("Cingrediente").value,document.getElementById("Ningrediente").value,document.getElementById("Pingrediente").value,document.getElementById("Singrediente").value));
                      
                      setIn(ing.concat(Object.assign({},Miniformat(document.getElementById("Cingrediente").value,document.getElementById("Ningrediente").value,document.getElementById("Pingrediente").value,document.getElementById("Singrediente").value))));
                      //console.log(ing);
                      setNrox(ing.length+1);
                      }}>Adicionar</button></label><br></br> <br></br>
                      <label>
                      <div className="container px-0 text-center">
                        <div className="row gx-0">
                            <div className="col">
                            <div className="p-3 border bg-light">
                                

                            <b>Nro de ingredientes {nrox}</b>
                            <table className="table">
                            <thead>
                                <tr>
                                
                                
                                <th scope="col">Nombre</th>
                                <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ing.map((elemenento)=>(
                                    <tr>
                                    
                                    <td>{elemenento.name}</td>
                                    <td><button type="button"  className="btn btn-danger" onClick={()=>{
                                      //console.log(ing.indexOf(elemenento)+1);
                                      if(ing.indexOf(elemenento)+1===nrox){
                                        ing.pop();
                      
                                      }else{
                                        ing.splice([ing.indexOf(elemenento)], 1); 
                                      }
                                      
                                      setNrox(ing.length);}}>Eliminar</button></td>
                                    </tr>
                                ))}

                            </tbody>
                            </table> 
                            </div>
                            </div>
                        </div>
                      </div>
                      </label>
                      <br></br><br></br>
                    <input class="form-control" type="file" id="formFile"></input><br></br> <br></br>
                    <button type="reset" className="btn btn-danger" onClick={handleClose2}>Cancelar</button>
                    <button type="submit"  className="btn btn-success">Modificar</button> 
                  </form>
                </Modal.Body>
              </Modal>
          </div>
          <div className="col-6 col-md-4">
              <br />
              
                  <b>Nro Platos: {nro}<br></br></b>
                 
                  <button type="button" onClick={()=>{
                    var addg=[]
                    
                    for (let i = 0; i < data_ingredientes.length; i++) {
                      addg.push("Adicionar")
                    }; 
                    if(addg.length>0){
                      setAdicionar(Object.assign({},addg));
                      setShow(true);
                    }else{
                      for (let i = 0; i < data_ingredientes.length; i++) {
                        addg.push("Adicionar")
                      }; 
                      setAdicionar(Object.assign({},addg));
                      setShow(true);
                    }
                    
                  
                    //console.log( adicionar)
                  //console.log( data_ingredientes.length)
                  }} className="btn btn-success">Crear Plato</button>
                  <br></br>
                  <b>Nro Bebidas: {nro6}<br></br></b>
                 
                 <button type="button" onClick={()=>{
                   setShow4(true);
                   
                 
                   //console.log( adicionar)
                 //console.log( data_ingredientes.length)
                 }} className="btn btn-success">Crear Bebida</button>
                 <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Bebida {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form
                    onSubmit={ev => {
                        ev.preventDefault();
                           
                        temporal3.brand=document.getElementById("brand2").value;
                        temporal3.alcoholicGrade=document.getElementById("alcoholicGrade2").value;
                        temporal3.price=document.getElementById("price3").value;
                        temporal3.volume=document.getElementById("volume2").value;
                        temporal3.description=document.getElementById("desc2").value;
                        if(imgdata.id!=undefined){
                          temporal3.imageId=imgdata.id;
                        }else{
                          temporal3.imageId=6;
                        }
                        data_bebidas.push(Object.assign({},temporal3));
                          var url = setingsu+setingsp+"/api/drinks";
                          fetch(url, {
                              headers: { "Content-type": "application/json" },
                              method: "POST",
                              body: JSON.stringify(Object.assign({},temporal3)),
                              
                            });
                          setNro6(data_bebidas.length);
                        
                        //data_platos.push(Object.assign({},temporal));
                        
                        setShow4(false);
                    }}
                    >
                    <label><b>Nombre de la bebida </b></label>  <input  id="brand2" type="text" name="brand2" autoComplete="off" ></input>  <br></br>  <br></br>
                    <label><b>Volumen de la bebida </b></label>  <input  id="volume2" type="text" name="volume2" autoComplete="off" ></input>  <br></br>  <br></br>
                    <label><b>Grado alcoholico</b></label>  <input  id="alcoholicGrade2" type="text" name="alcoholicGrade2" autoComplete="off" ></input>  <br></br> <br></br>
                    <label><b>Precio de la bebida</b></label>  <input  id="price3" type="text" name="price3" autoComplete="off" ></input>  <br></br> <br></br>
                    <label><b>Descripcion de la bebida</b></label>  <input  id="desc2" type="text" name="desc2" autoComplete="off" ></input>  <br></br> <br></br>
                    <label for="formFile" class="form-label"><b>Instertar Imagen</b> <br></br><br></br></label><br></br> <br></br>
                    <label><input class="form-control" type="file" id="formFile" onChange={(e)=>{Sendimage(e)}}></input></label><br></br> <br></br>
                      <br></br><br></br>
                    <button type="reset" className="btn btn-danger" onClick={handleClose4}>Cancelar</button>
                    <button type="submit"  className="btn btn-success">Crear</button> 
                  </form>
                </Modal.Body>
              </Modal>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Adicionar plato</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form
                      onSubmit={ev => {
                          ev.preventDefault();
                          //temporal.id=data_platos.length+1;   
                          temporal.name=document.getElementById("name").value;
                          temporal.type=document.getElementById("type").value;
                          temporal.price=document.getElementById("price").value;
                          temporal.newIngredients=ing;
                          temporal.ingredients=poradi;
                          if(imgdata.id!=undefined){
                            temporal.imageId=imgdata.id;
                          }else{
                            temporal.imageId=1;
                          }
                          
                          //console.log(temporal.name);
                          data_platos.push(Object.assign({},temporal));
                          var url = setingsu+setingsp+"/api/foods";
                          fetch(url, {
                              headers: { "Content-type": "application/json" },
                              method: "POST",
                              body: JSON.stringify(Object.assign({},temporal)),
                              
                            });
                          setNro(data_platos.length);
                          ing.length=0;
                          setShow(false);
                      }}
                      >
                      <label><b>Nombre del plato </b></label>  <input  id="name" type="text" name="name" autoComplete="off" ></input>  <br></br>  <br></br>
                      <label><b>Tipo de plato</b></label>  <input  id="type" type="text" name="type" autoComplete="off" ></input>  <br></br> <br></br>
                      <label><b>Precio del plato</b></label>  <input  id="price" type="text" name="price"  autoComplete="off" ></input>  <br></br> <br></br>
                      <label for="formFile" class="form-label" ><b>Insertar imagen</b></label> 
                      <label><input class="form-control" type="file" id="formFile" onChange={(e)=>{Sendimage(e)}}></input></label><br></br> <br></br>
                      
                      <label><b>Ingredientes actuales</b></label><br></br> <br></br>
                      <div class="container px-4 text-center">
                        <div class="row gx-5">
                          <div class="col">
                          <div class="p-3 border bg-light">
                          <table className="table">
                            <thead>
                                <tr>
                                
                                
                                <th scope="col">Nombre</th>
                                <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {data_ingredientes.map((elemenentox)=>(
                                    
                                    <tr>
                                    
                                    <td>{elemenentox.name}</td>
                                    <td><input  id="ammount" type="text" name="ammount" autoComplete="off"></input></td>
                                    <td><button type="button"  className="btn btn-danger" onClick={()=>{
                                      //console.log(ing.indexOf(elemenento)+1);
                                      

                                      setAdicionar(AdicionarCreacion(adicionar,elemenentox,document.getElementById("ammount").value));
                                      console.log(poradi)
                                      
                                      }}>{adicionar[data_ingredientes.indexOf(elemenentox)]}</button></td>
                                    </tr>
                                ))}

                            </tbody>
                            </table> 
                          </div>
                          </div>
                          
                        </div>
                      </div>
                      <label><b>Insertar ingredientes</b></label> <br></br> <br></br>
                      
                      <label>Nombre ingrediente</label> <br></br> 
                      <input id="Ningrediente" type="text" name="Ningrediente" autoComplete='off'></input><br></br> <br></br>
                      <label>Precio ingrediente</label> <br></br> 
                      <input id="Pingrediente" type="text" name="Pingrediente" autoComplete='off'></input><br></br> <br></br>
                      <label>Stock ingrediente</label> <br></br> 
                      <input id="Singrediente" type="text" name="Singrediente" autoComplete='off'></input><br></br> <br></br>
                      <label>Cantidad para el plato</label> <br></br> 
                      <input id="Cingrediente" type="text" name="Cingrediente" autoComplete='off'></input><br></br> <br></br>
                      <label><button type="button" className="btn btn-success" onClick={()=>{
                        
                        //console.log("Antes----------");
                        //console.log(JSON.stringify(ingi));
                        setIngi(Miniformat(document.getElementById("Cingrediente").value,document.getElementById("Ningrediente").value,document.getElementById("Pingrediente").value,document.getElementById("Singrediente").value));
                      
                      setIn(ing.concat(Object.assign({},Miniformat(document.getElementById("Cingrediente").value,document.getElementById("Ningrediente").value,document.getElementById("Pingrediente").value,document.getElementById("Singrediente").value))));
                      //console.log(ing);
                      setNrox(ing.length+1);
                      }}>Adicionar</button></label><br></br> <br></br>
                      <label>
                      <div className="container px-0 text-center">
                        <div className="row gx-0">
                            <div className="col">
                            <div className="p-3 border bg-light">
                                

                            <b>Nro de ingredientes {nrox}</b>
                            <table className="table">
                            <thead>
                                <tr>
                                
                                
                                <th scope="col">Nombre</th>
                                <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ing.map((elemenento)=>(
                                    <tr>
                                    
                                    <td>{elemenento.name}</td>
                                    <td><button type="button"  className="btn btn-danger" onClick={()=>{
                                      //console.log(ing.indexOf(elemenento)+1);
                                      if(ing.indexOf(elemenento)+1===nrox){
                                        ing.pop();
                      
                                      }else{
                                        ing.splice([ing.indexOf(elemenento)], 1); 
                                      }
                                      
                                      setNrox(ing.length);}}>Eliminar</button></td>
                                    </tr>
                                ))}

                            </tbody>
                            </table> 
                            </div>
                            </div>
                        </div>
                      </div>
                      </label>
                      <br></br><br></br>
                      
                      <button type="reset" className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                      <button type="submit"  className="btn btn-success">A??adir</button> 
                    </form>
                    </Modal.Body>
                  </Modal>
              <br />
          </div>
          
          </div>
          <br></br>
          <Abajo></Abajo>
      </div>
  )

    
}
export default PMain;
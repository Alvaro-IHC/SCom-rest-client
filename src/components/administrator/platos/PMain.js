import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Abajo from "./Abajo/Abajo"
import {useEffect} from 'react'
//import Mcrear from './Modal/Mcrear'
var data_platos=[
  
]
var data_ingredientes=[

]
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
function Eliminar(a){
    data_platos.splice([data_platos.indexOf(a)], 1)
}
function Editar(temp){
  var counter=0;
    data_platos.map((dato)=>{
    
      if(dato.id===temp.id){
        if(temp.name===""){
          temp.name=data_platos[counter].name;
        }if(temp.type===""){
          temp.type=data_platos[counter].type;
        }if(temp.price===""){
          temp.price=data_platos[counter].price;
        }
          data_platos[counter]=Object.assign({},temp); 
           
      }
      counter++;
    })
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
function PMain(){
  const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch("http://localhost:8081/api/foods")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
  data_platos=loadeddata;
  const [loadeddata2, setloadeddata2] = useState([]);
    useEffect(()=>{
      
      fetch("http://localhost:8081/api/ingredients")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
  data_ingredientes=loadeddata2;
  const [show, setShow] = useState(false);
  const [nro,setNro]=useState(data_platos.length);
  const [name, setN]=useState("");
  const [type, setT]=useState("");
  const [price, setP]=useState("");
  const [id, setI]=useState(0);
  const [imag, setIm]= useState("");
  const [adicionar, setAdi]= useState([]);
  const [counter, setcounter]= useState(-1);
  const [ingi, setIngi]= useState({
    
  });
  const [ingredientesP, setIngP]= useState([]);
  const [ing, setIn]= useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const [nrox, setNrox]=useState(0);
  return(
      <div>
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
                      <button type="button" className="btn btn-primary" onClick={()=>{setIm(dato.urlImage);setI(dato.id);setN(dato.name);setT(dato.type);setP(dato.price);setShow2(true);temporal.id=dato.id}}>
                        Editar 
                      </button>

                      
                          {" "}
                      <button type="button" className="btn btn-danger" onClick={()=>{setIm(dato.urlImage);Eliminar(dato); setNro(data_platos.length)}}>Eliminar</button>
                      
                      </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Plato {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form
                    onSubmit={ev => {
                        ev.preventDefault();
                           
                        temporal.name=document.getElementById("name2").value;
                        temporal.type=document.getElementById("type2").value;
                        temporal.price=document.getElementById("price2").value;
                        //console.log(temporal.name);
                        Editar(temporal)
                        //data_platos.push(Object.assign({},temporal));
                        setNro(data_platos.length);
                        setShow2(false);
                    }}
                    >
                    <label><b>Nombre del plato </b></label>  <input  id="name2" type="text" name="name2" autoComplete="off" placeholder={name}></input>  <br></br>  <br></br>
                    <label><b>Tipo de plato</b></label>  <input  id="type2" type="text" name="type2" autoComplete="off" placeholder={type}></input>  <br></br> <br></br>
                    <label><b>Precio del plato</b></label>  <input  id="price2" type="text" name="price2" autoComplete="off" placeholder={price}></input>  <br></br> <br></br>
                    <label for="formFile" class="form-label"><b>Cambiar Imagen</b> <br></br><br></br><img  className="img-fluid" src={imag} alt="Responsive image"></img></label><br></br> <br></br>
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
                  <Button variant="primary" onClick={handleShow}>
                    Crear plato
                  </Button>

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
                          //console.log(temporal.name);
                          data_platos.push(Object.assign({},temporal));
                          setNro(data_platos.length);
                          ing.length=0;
                          setShow(false);
                      }}
                      >
                      <label><b>Nombre del plato </b></label>  <input  id="name" type="text" name="name" autoComplete="off" ></input>  <br></br>  <br></br>
                      <label><b>Tipo de plato</b></label>  <input  id="type" type="text" name="type" autoComplete="off" ></input>  <br></br> <br></br>
                      <label><b>Precio del plato</b></label>  <input  id="price" type="text" name="price" autoComplete="off" ></input>  <br></br> <br></br>
                      <label for="formFile" class="form-label"><b>Insertar imagen</b></label>  <input class="form-control" type="file" id="formFile"></input><br></br> <br></br>
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
                                    <td><button type="button"  className="btn btn-danger" onClick={()=>{
                                      //console.log(ing.indexOf(elemenento)+1);
                                      setAdi(adicionar.concat("Adicionar"));
                                      counter=counter+1;
                                      if(adicionar==="Adicionar"){
                                        setIngP(ingredientesP.concat(elemenentox));
                                        adicionar[counter]="Adicionado";
                                      }else{
                                        setIngP(ingredientesP.slice(counter,1))
                                      }
                                      }}>{adicionar[counter]}</button></td>
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
                      <button type="submit"  className="btn btn-success">Añadir</button> 
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
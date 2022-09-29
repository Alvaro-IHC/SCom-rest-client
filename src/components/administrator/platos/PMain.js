import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect} from 'react'
//import Mcrear from './Modal/Mcrear'
var data_platos=[
  {
    id: 1,
    price: 25,
    name: "Silpancho",
    type: "Llano",
    ingredients: []
  }
]
var temporal=  {
    id: 1,
    price: 25,
    name: "Silpancho",
    type: "Llano",
    ingredients: []
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
function PMain(){
  const [loadeddata, setloadeddata] = useState([]);
    useEffect(()=>{
      
      fetch("http://localhost:8081/api/foods")
      .then(response => response.json())
      .then(data => setloadeddata(data));
      
    },[])
  data_platos=loadeddata
  console.log(loadeddata)
  const [show, setShow] = useState(false);
  const [nro,setNro]=useState(data_platos.length);
  const [name, setN]=useState("");
  const [type, setT]=useState("");
  const [price, setP]=useState("");
  const [id, setI]=useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  return(
      <div>
          <div className="row g-0 text-center">
          <div className="col-sm-6 col-md-8 border bg-light">
          <table className="table">
                  <thead>
                  <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>type</th>
                      <th>price</th>
                      <th>Accion</th>
                  </tr>
                  </thead>

                  <tbody>
                  {data_platos.map((dato) => (
                      <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.name}</td>
                      <td>{dato.type}</td>
                      <td>{dato.price}</td>
                      <td>
                      <button type="button" className="btn btn-primary" onClick={()=>{setI(dato.id);setN(dato.name);setT(dato.type);setP(dato.price);setShow2(true);temporal.id=dato.id}}>
                        Editar 
                      </button>

                      
                          {" "}
                      <button type="button" className="btn btn-danger" onClick={()=>{Eliminar(dato); setNro(data_platos.length)}}>Eliminar</button>
                      
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
                    <label><b>name del plato </b></label>  <input  id="name2" type="text" name="name2" autoComplete="off" placeholder={name}></input>  <br></br>  <br></br>
                    <label><b>type de plato</b></label>  <input  id="type2" type="text" name="type2" autoComplete="off" placeholder={type}></input>  <br></br> <br></br>
                    <label><b>price del plato</b></label>  <input  id="price2" type="text" name="price2" autoComplete="off" placeholder={price}></input>  <br></br> <br></br>
                    <button type="reset" className="btn btn-danger" onClick={handleClose2}>Cancelar</button>
                    <button type="submit"  className="btn btn-success">Añadir</button> 
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
                          temporal.id=data_platos.length+1;   
                          temporal.name=document.getElementById("name").value;
                          temporal.type=document.getElementById("type").value;
                          temporal.price=document.getElementById("price").value;
                          //console.log(temporal.name);
                          data_platos.push(Object.assign({},temporal));
                          setNro(data_platos.length);
                          setShow(false);
                      }}
                      >
                      <label><b>name del plato </b></label>  <input  id="name" type="text" name="name" autoComplete="off" ></input>  <br></br>  <br></br>
                      <label><b>type de plato</b></label>  <input  id="type" type="text" name="type" autoComplete="off" ></input>  <br></br> <br></br>
                      <label><b>price del plato</b></label>  <input  id="price" type="text" name="price" autoComplete="off" ></input>  <br></br> <br></br>
                      <button type="reset" className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                      <button type="submit"  className="btn btn-success">Añadir</button> 
                    </form>
                    </Modal.Body>
                  </Modal>
              <br />
          </div>
          </div>
      </div>
  )

    
}
export default PMain;
import React, { useEffect, useState } from "react";
import "./User.css";
import edit from "../../../assets/images/administrator/edit.svg";
import trash from "../../../assets/images/administrator/trash.svg";
import Modal from "../modal/Modal";
import "./User.css";
import settings from "../../../settings.json";
import bd from "../api/productsj.json";
import Administrator from './Administrator'
import Cashier from './Cashier'
import Chef from './Chef'
import Customer from './Customer'
import Waiter from './Waiter'

function User() {
  const p = settings.puerto;
  const u = settings.url;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(bd);
  }, []);

  const [rol, setRol] = useState("");
  const [rolAdd, setRolAdd] = useState("");
  const [estado, setEstado] = useState(false);
  const [datos, setDatos] = useState({
    fatherLastname: "",
    motherLastname: "",
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    salary:"",
    experience:"",
    healthCode:"",
    degree:"",
    nationality:"",
    specialty:"",
    nit:""
  });

  const initailForm = {
    fatherLastname: "",
    motherLastname: "",
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    salary:"",
    experience:"",
    healthCode:"",
    degree:"",
    nationality:"",
    specialty:"",
    nit:""
  };
  const [dataToEdit, setDataToEdit] = useState(null);

  const handleInputChange = (e) => {
    setDatos((datos) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (dataToEdit) {
      setDatos(dataToEdit);
    } else {
      setDatos(initailForm);
    }
  }, [dataToEdit]);

  const editValue = (e) => {
    setEstado(!estado);
    setDataToEdit(e);
    setRolAdd(e.rol)
    console.log(e)
  };

  const deletValue = (e) => {
    console.log(e);
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${e.id}'?`
    );

    if (isDelete) {
      console.log("eliminado");
    } else {
      console.log("cancelado");
    }
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    };

    let url = u + p + "/api/" + rolAdd;
    console.log(url)
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  const limpiar = () => {
    setDatos({
      fatherLastname: "",
      motherLastname: "",
      name: "",
      email: "",
      username: "",
      password: "",
      address: "",
      salary:"",
      experience:"",
      healthCode:"",
      degree:"",
      nationality:"",
      specialty:"",
      nit:""
    });
  };

  const handleChange = (e) => {
    setRol((rol) => ({
      ...rol,
      [e.target.name]: e.target.value,
    }));
    
    
  };

  const handleChangeAdd = (e) => {
    setRolAdd(e.target.value);

    console.log(e.target.value)
    
  };

  const handleOnClick=()=>{
    setEstado(!estado);
  }
  const handleClickRol=()=>{

    let datosFil=bd.filter(function(e){
      return e.rol===rol.rol;
    })
    if(rol.rol==="all"){
      setProducts(bd)
    }else{
      setProducts(datosFil)
    }

  }

  const getContent=()=>{
    if(rolAdd==="cashiers"){
      return <Cashier enviarDatos={enviarDatos} handleInputChange={handleInputChange} limpiar={limpiar}/>;
    }else if(rolAdd==="administrators"){
      return <Administrator enviarDatos={enviarDatos} handleInputChange={handleInputChange} limpiar={limpiar}/>;
    }else if(rolAdd==="chefs"){
      return <Chef enviarDatos={enviarDatos} handleInputChange={handleInputChange} limpiar={limpiar}/>;
    }else if(rolAdd==="customers"){
      return <Customer enviarDatos={enviarDatos} handleInputChange={handleInputChange} limpiar={limpiar}/>;
    }else if(rolAdd==="waiters"){
      return <Waiter enviarDatos={enviarDatos} handleInputChange={handleInputChange} limpiar={limpiar} datos={datos} />;
    }else{
      return <h1>Error, Elija un rol</h1>;
    }
  }


  return (
    <>
      <main className="container_adm">
        <h1 className="title_jv_adm">Usuarios</h1>
        <div className="form_action--button_jv_adm item1_jv_adm ct_admin">
          <select onChange={handleChange} name="rol">
            <option disabled selected>
              tipo de usuario
            </option>
            <option value="waiters">Camarero</option>
            <option value="cashiers">Cajero</option>
            <option value="chefs">Chef</option>
            <option value="administrators">Administrador</option>
            <option value="customers">Cliente</option>
            <option value="all">todos</option>
            
          </select>
          <button  className="item_buttom_jv_adm item_add_jv_adm btn_adm" onClick={handleClickRol}> filtrar </button>
        </div>
        <div>
          <select onChange={handleChangeAdd} name="rol">
            <option disabled selected>
              tipo de usuario
            </option>
            <option value="waiters">Camarero</option>
            <option value="cashiers">Cajero</option>
            <option value="chefs">Chef</option>
            <option value="administrators">Administrador</option>
            <option value="customers">Cliente</option>
          </select>
          <button  className="item_buttom_jv_adm item_add_jv_adm btn_adm" onClick={handleOnClick}>adicionar</button>
        </div>
        <table className="table_jv_adm">
          <thead className="thead_jv_adm">
            <tr className="tr_jv_adm">
              <th className="title_adm">PATERNO</th>
              <th className="title_adm">MATERNO</th>
              <th className="title_adm">NOMBRE</th>
              <th className="title_adm">CORREO</th>
              <th className="title_adm">USERNAME</th>
              <th className="title_adm">CONTRASEÑA</th>
              <th className="title_adm">DIRECCION</th>
              <th className="title_adm">ROL</th>
              <th className="title_adm">ACCION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => (
              <tr key={e.id} className="tr_jv_adm">
                <td className="td_jv_adm" data-label="fatherlastname">
                  {e.fatherLastname}
                </td>
                <td className="td_jv_adm" data-label="motherlastname">
                  {e.motherLastname}
                </td>
                <td className="td_jv_adm" data-label="name">
                  {e.name}
                </td>
                <td className="td_jv_adm" data-label="email">
                  {e.email}
                </td>
                <td className="td_jv_adm" data-label="username">
                  {e.username}
                </td>
                <td className="td_jv_adm" data-label="password">
                  {e.password}
                </td>
                <td className="td_jv_adm" data-label="addres">
                  {e.address}
                </td>
                <td className="td_jv_adm" data-label="ROL">
                  {e.rol}
                </td>
                <td className="td_jv_adm" data-label="ACCION">
                  <a href="#">
                    <img
                      src={edit}
                      alt=""
                      className="action_jv_adm"
                      onClick={() => editValue(e)}
                    />
                  </a>
                  <a>
                    <img
                      src={trash}
                      alt=""
                      className="action_jv_adm"
                      onClick={() => deletValue(e)}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Modal estadoM={estado} setEstadoM={setEstado} productsj>
      {getContent()}
       
      </Modal>
    </>
  );
}

export default User;

import React, { useEffect, useState } from "react";
import "./User.css";
import edit from "../../../assets/images/administrator/edit.svg";
import trash from "../../../assets/images/administrator/trash.svg";
import Modal from "../modal/Modal";
import "./User.css";
import settings from "../../../settings.json";
import Administrator from "./Administrator";
import Cashier from "./Cashier";
import Chef from "./Chef";
import Customer from "./Customer";
import Waiter from "./Waiter";
//import bd from '../api/productsj.json'

function User() {
  const p = settings.puerto;
  const u = settings.url;
  const [products, setProducts] = useState([]);
  const [bd, setBd] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    let url = u + p + "/api/users";
    const options = { method: "GET" };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => cargar(response))
      .catch((err) => console.error(err));
  }, []);

  const cargar = (response) => {
    setProducts(response);
    setBd(response);
  };

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
    salary: "",
    experience: "",
    healthCode: "",
    degree: "",
    nationality: "",
    specialty: "",
    nit: "",
  });

  const initailForm = {
    fatherLastname: "",
    motherLastname: "",
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    salary: "",
    experience: "",
    healthCode: "",
    degree: "",
    nationality: "",
    specialty: "",
    nit: "",
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
    setFlag(false);
    setRolAdd(e.role);
    let url = u + p + "/api/" + e.role + "s/" + e.id;
    const options = { method: "GET" };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDataToEdit(response);
      })
      .catch((err) => console.error(err));
  };

  const deletValue = (e) => {

   
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${e.id}'?`
    );

    if (isDelete) {

      console.log(e);
      let nbd=bd.filter((x)=>x.id!=e.id)
      console.log(nbd)
      console.log(bd)
      setProducts(nbd)
      setBd(nbd)
      let url = u + p + "/api/users/" + e.id;

      fetch(url, {
        method: "DELETE"
  
      })
        .then((response) => {
          return response.json();
        })
        .then((data) =>
          // this is the data we get after doing the delete request, do whatever you want with this data
          console.log(data)
        );

       url = u + p + "/api/users";
        const options = { method: "GET" };
    
        fetch(url, options)
          .then((response) => response.json())
          .then((response) => setProducts(response))
          .catch((err) => console.error(err));
        console.log("elininado")


    } else {
      console.log("cancelado");
    }
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    if (
      datos.address.length > 0 &&
      datos.email.length > 0 &&
      datos.fatherLastname.length > 0 &&
      datos.motherLastname.length > 0 &&
      datos.name.length > 0 &&
      datos.password.length > 0 &&
      datos.username.length > 0
    ) {
      const options = {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
        },
      };

      let url = u + p + "/api/" + rolAdd;
      console.log(url);
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
      let isDelete = window.confirm(`datos guardados de ${datos.name}`);
    } else {
      let isDelete = window.confirm(`Error, no debe existir campos vacios`);
    }
    limpiar();
  };

  const actualizarDatos = (e) => {
    e.preventDefault();
    console.log(datos)
    let url = u + p + "/api/" + datos.role + "s/" + datos.id;
    const options = {
      method: 'PUT',
      body: JSON.stringify(datos)
    };
    
    fetch(url, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
      salary: "",
      experience: "",
      healthCode: "",
      degree: "",
      nationality: "",
      specialty: "",
      nit: "",
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

    console.log(e.target.value);
  };

  const handleOnClick = () => {
    setEstado(!estado);
    setFlag(true);
  };
  const handleClickRol = () => {
    let datosFil = bd.filter(function (e) {
      return e.role === rol.rol;
    });
    if (rol.rol === "all") {
      setProducts(bd);
    } else {
      setProducts(datosFil);
    }
  };

  const getContent = () => {
    if (rolAdd === "cashier") {
      return (
        <Cashier
          enviarDatos={flag === true ? enviarDatos : actualizarDatos}
          handleInputChange={handleInputChange}
          limpiar={limpiar}
          datos={datos}
          flag={flag}
        />
      );
    } else if (rolAdd === "administrator") {
      return (
        <Administrator
          enviarDatos={flag === true ? enviarDatos : actualizarDatos}
          handleInputChange={handleInputChange}
          limpiar={limpiar}
          datos={datos}
          flag={flag}
        />
      );
    } else if (rolAdd === "chef") {
      return (
        <Chef
          enviarDatos={flag === true ? enviarDatos : actualizarDatos}
          handleInputChange={handleInputChange}
          limpiar={limpiar}
          datos={datos}
          flag={flag}
        />
      );
    } else if (rolAdd === "customer") {
      return (
        <Customer
          enviarDatos={flag === true ? enviarDatos : actualizarDatos}
          handleInputChange={handleInputChange}
          limpiar={limpiar}
          datos={datos}
          flag={flag}
        />
      );
    } else if (rolAdd === "waiter") {
      return (
        <Waiter
          enviarDatos={flag === true ? enviarDatos : actualizarDatos}
          handleInputChange={handleInputChange}
          limpiar={limpiar}
          datos={datos}
          flag={flag}
        />
      );
    } else {
      return <h1>Error, Elija un rol</h1>;
    }
  };

  return (
    <>
      <main className="container_adm">
        <h1 className="title_jv_adm">Usuarios</h1>
        <div className="form_action--button_jv_adm item1_jv_adm ct_admin">
          <select onChange={handleChange} name="rol" defaultValue={"DEFAULT"}>
            <option disabled value="DEFAULT">
              tipo de usuario
            </option>
            <option value="waiter">Camarero</option>
            <option value="cashier">Cajero</option>
            <option value="chef">Chef</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
            <option value="all">todos</option>
          </select>
          <button
            className="item_buttom_jv_adm item_add_jv_adm btn_adm"
            onClick={handleClickRol}
          >
            {" "}
            filtrar{" "}
          </button>
        </div>
        <div>
          <select
            onChange={handleChangeAdd}
            name="rol"
            defaultValue={"DEFAULT"}
          >
            <option disabled value="DEFAULT">
              tipo de usuario
            </option>
            <option value="waiter">Camarero</option>
            <option value="cashier">Cajero</option>
            <option value="chef">Chef</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
          <button
            className="item_buttom_jv_adm item_add_jv_adm btn_adm"
            onClick={handleOnClick}
          >
            adicionar
          </button>
        </div>
        <div className="container_table">
          <table className="table_jv_adm">
            <thead className="thead_jv_adm">
              <tr className="tr_jv_adm">
                <th className="title_adm">PATERNO</th>
                <th className="title_adm">MATERNO</th>
                <th className="title_adm">NOMBRE</th>
                <th className="title_adm">CORREO</th>
                <th className="title_adm">USERNAME</th>
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
        </div>
      </main>
      <Modal
        estadoM={estado}
        setEstadoM={setEstado}
        productsj
        setDatos={setDatos}
        initailForm={initailForm}
      >
        {getContent()}
      </Modal>
    </>
  );
}

export default User;

import React, { useEffect, useState } from "react";
import "./User.css";
import edit from "../../../assets/images/administrator/edit.svg";
import trash from "../../../assets/images/administrator/trash.svg";
import Modal from "../modal/Modal";
import "./User.css";
import settings from "../../../settings.json";
import bd from "../api/productsj.json";
import { Button } from "react-bootstrap";
function User() {
  const p = settings.puerto;
  const u = settings.url;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(bd);
  }, []);

  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState(false);
  const [datos, setDatos] = useState({
    fatherLastname: "",
    motherLastname: "",
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    rol: "",
  });
  const initailForm = {
    fatherLastname: "",
    motherLastname: "",
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    rol: "",
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

    let url = u + p + "/api/" + datos.rol;
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
      rol: "",
    });
  };

  const handleChange = (e) => {
    setRol((rol) => ({
      ...rol,
      [e.target.name]: e.target.value,
    }));

    console.log(rol)
    console.log(bd)
    
  };

  const handleOnClick=()=>{
    setEstado(!estado);
  }
  const handleClickRol=()=>{
    console.log(rol)
    
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
          </select>
          <button  className="item_buttom_jv_adm item_add_jv_adm btn_adm" onClick={handleClickRol}> filtrar </button>
        </div>
        <div>
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
        <section className="main_1form_jv_adm">
          <p className="item_1form_jv_adm p_jv_adm">DATOS DEL CLIENTE</p>
          <form
            autoComplete="off"
            className="item_1form_jv_adm item_1container_jv_adm"
            onSubmit={enviarDatos}
          >
            <div className="item1_jv_adm">
              <input
                type="text"
                name="fatherLastname"
                placeholder="Apellido Parterno"
                onChange={handleInputChange}
                value={datos.fatherLastname}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="motherLastname"
                placeholder="Apellido Materno:"
                onChange={handleInputChange}
                value={datos.motherLastname}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={datos.name}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={datos.email}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                onChange={handleInputChange}
                value={datos.username}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
                value={datos.password}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="address"
                placeholder="Direccion"
                onChange={handleInputChange}
                value={datos.address}
              />
            </div>
            <div className="form_action--button_jv_adm item1_jv_adm">
              <select
                onChange={handleInputChange}
                name="rol"
                defaultValue="null"
                value={datos.rol}
              >
                <option disabled selected>
                  tipo de usuario
                </option>
                <option value="waiters">Camarero</option>
                <option value="cashiers">Cajero</option>
                <option value="chefs">Chef</option>
                <option value="administrators">Administrador</option>
              </select>
            </div>
            <div className="form_action--button_jv_adm item1_jv_adm">
              <button
                type="submit"
                value="Agregar"
                className="item_buttom_jv_adm item_add_jv_adm"
              >
                Guardar
              </button>
              <button
                type="reset"
                value="Limpiar"
                className="item_buttom_jv_adm item_alert_jv_adm"
                onClick={limpiar}
              >
                Limpiar
              </button>
            </div>
          </form>
        </section>
      </Modal>
    </>
  );
}

export default User;


import React, { useEffect, useState } from "react";
import "./User.css"
import edit from "../../../assets/images/administrator/edit.svg"
import trash from "../../../assets/images/administrator/trash.svg"
import Modal from '../modal/Modal'
import "./User.css"
import settings from '../../../settings.json';
function User() {
  const p = settings.puerto;
  const u = settings.url;
  const productsj = [
    { id: 1, name: "Jorge", fatherlastname:"Quispe", motherlastname: "Mamani", rol: "Chef" },
    { id: 2, name: "marco", fatherlastname:"Quispe", motherlastname: "Mamani", rol: "cliente" },
   { id: 3, name: "roli", fatherlastname:"Quispe", motherlastname: "Mamani", rol: "mesero" },
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsj);
  }, []); 

  const[estado,setEstado]=useState(false);
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
  const handleInputChange = (e) => {
    setDatos((datos) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };

  const editValue=(e)=>{
    setEstado(!estado)
    console.log(e)
    
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let url = u+p+"/api/" + datos.rol;
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


  return (

<>
    <main className="container_adm">
          <h1 className="title_jv">Usuarios</h1>
      <table className="table_jv">
        <thead className="thead_jv">
          <tr className="tr_jv">
            <th>CODIGO</th>
            <th>NOMBRE</th>
            <th>APELLIDO PATERNO</th>
            <th>APELLIDO MATERNO</th>
            <th>ROL</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e) => (
            <tr key={e.id} className="tr_jv">
              <td className="td_jv" data-label="Codigo">
                {e.id}
              </td>
              <td className="td_jv" data-label="NOMBRE">
                {e.name}
              </td>
              <td className="td_jv" data-label="APELLIDO PATERNO">
                {e.fatherlastname}
              </td>
              <td className="td_jv" data-label="APELLIDO MATERNO">
                {e.motherlastname}
              </td>
              <td className="td_jv" data-label="ROL">
                {e.rol}
              </td>
              <td className="td_jv" data-label="ACCION">
                <a href="#"  >
                  <img src={edit} alt="" className="action_jv" onClick={()=>editValue(e)}/>
                </a>
                <a>
                  <img src={trash} alt=""  className="action_jv"/>
                </a>

              </td>

            </tr>
          ))}
        </tbody>
     
      </table>
      
    </main>
    <Modal
     estadoM={estado}
     setEstadoM={setEstado}
     productsj
    >
      <section className="main_1form_jv">
              <p className="item_1form_jv p_jv">DATOS DEL CLIENTE</p>
              <form
                autoComplete="off"
                className="item_1form_jv item_1container_jv"
                onSubmit={enviarDatos}
              >
                <div className="item1_jv">
                  <input
                    type="text"
                    name="fatherLastname"
                    placeholder="Apellido Parterno"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="motherLastname"
                    placeholder="Apellido Materno:"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="address"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form_action--button_jv item1_jv">
                  <select onChange={handleInputChange} name="rol" defaultValue="null">
                    <option disabled selected>
                      tipo de usuario
                    </option>
                    <option value="waiters">Camarero</option>
                    <option value="cashiers">Cajero</option>
                    <option value="chefs">Chef</option>
                    <option value="administrators">Administrador</option>
                  </select>
                </div>
                <div className="form_action--button_jv item1_jv">
                  <button
                    type="submit"
                    value="Agregar"
                    className="item_buttom_jv item_add_jv"
                  >
                    Agregar
                  </button>
                  <button
                    type="reset"
                    value="Limpiar"
                    className="item_buttom_jv item_alert_jv"
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

export default User
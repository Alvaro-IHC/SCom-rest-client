import React, { useState } from "react";
import "./Section.css";
import "../api/db.json";
import prod from "../api/prod.json";
import settings from "../../../settings.json";
function Section() {
  const p = settings.puerto;
  const u = settings.url;
  const productsj = [
    { id: 1, description: "soda", amount: 2, price: 150, total: 300 },
    { id: 2, description: "ensalada", amount: 3, price: 15, total: 45 },
    { id: 3, description: "ensalada", amount: 3, price: 15, total: 45 },
  ];
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const obtenerDatos = async () => {
    setProducts(productsj);
  };

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

  const [date, setDate] = useState({
    year: "",
    month: "",
    flag: "",
  });

  const [nit, setNit] = useState(null);

  const handleInputNit = (e) => {
    setNit((nit) => ({
      ...nit,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputChange = (e) => {
    setDatos((datos) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputDate = (e) => {
    setDate((date) => ({
      ...date,
      [e.target.name]: e.target.value,
    }));
  };

  const [codigo, setCodigo] = useState();
  const handleInputCodigo = (e) => {
    setCodigo(e.target.value);

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
      datos.rol.length > 0 &&
      datos.username.length > 0
    ) {
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
      let isDelete = window.confirm(`datos guardados de ${datos.name}`);
    } else {
      let isDelete = window.confirm(`Error, no debe existir campos vacios`);
    }
    limpiar();
  };
  const repCodigo = (e) => {
    e.preventDefault();
    if(codigo!=null){
      datoFactura()
    }else{
      alert("Error, no debe existir campos vacios")
    }
    
  };

  const datoFactura = async ( ) =>{
    console.log(codigo);
    let url = u + p + "/api/orders";
    const response = await fetch(url);
 
   //turning the response into the usable data
    const data = await response.json( );
 
    //now do whatever your want with this data. 
    console.log(data);

    let datosFil = data.filter(function (e) {
      return e.id === parseInt(codigo);
    });
    setOrder(datosFil)
    console.log(order);
    //obtenerDatos();
 }

 const facturar = async ( ) =>{
  console.log(order);
  if(nit !=null){
    console.log(nit);
    obtenerDatos();
  }else{
    alert("Error, no debe existir campos vacios")
  }
  
  /*let url = u + p + "/api/orders";
  const response = await fetch(url);
  const data = await response.json( );
  console.log(data);*/
  


  //obtenerDatos();
}


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
  const limpiaCod = () => {
    setCodigo("");
    setProducts([]);


  };
  const report = (e) => {
    e.preventDefault();
    const url = `${u}${p}/api/stats/income-expenses?month=${date.month}&year=${date.year}`;

    if (date.flag >= 0 && date.month.length > 0 && date.year.length > 0) {
      const options = { method: "GET" };
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          evaluar(response);
        })
        .catch((err) => console.error(err));
    } else {
      let isDelete = window.confirm(
        `Error,  debe seleccionar el mes, año y el tipo de reporte`
      );
    }
    console.log(date);
  };

  const evaluar = (response) => {
    let isDelete = true;
    console.log(response);
    if (date.flag === "1") {
      isDelete = window.confirm(`ingreso: ${response[0].value} Bs`);
    } else {
      isDelete = window.confirm(`egreso: ${response[1].value} Bs`);
    }
    if (isDelete) {
      console.log("eliminado");
    } else {
      console.log("cancelado");
    }
  };

  
  let cont = 0;

  return (
    <>
      <div className="container_jv">
        <div className="item_jv left_jv">
          <div className="lefitem_jv left1_jv">
            <section className="main_1form_jv">
              <p className="item_1form_jv p_jv">DATOS DEL EMPLEADO</p>
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
                  <select
                    onChange={handleInputChange}
                    name="rol"
                    defaultValue={"DEFAULT"}
                  >
                    <option disabled value="DEFAULT">
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
          </div>
          <div className="lefitem_jv left2_jv">
            <form
              autoComplete="off"
              className="container2_jv"
              onSubmit={report}
            >
              <p className="item1_it2_jv p_jv">REPORTE</p>
              <div className="item_form2_jv">
                <select
                  onChange={handleInputDate}
                  name="flag"
                  className="select_jv sele_jv"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled value="DEFAULT">
                    tipo
                  </option>
                  <option value="1">ingreso</option>
                  <option value="0">egreso</option>
                </select>
              </div>
              <div className="item_form2_jv">
                <select
                  onChange={handleInputDate}
                  name="month"
                  className="select_jv month_jv"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled value="DEFAULT">
                    Mes
                  </option>
                  <option value="1">Enero</option>
                  <option value="2">Febrero</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                  <option value="5">Mayo</option>
                  <option value="6">Junio</option>
                  <option value="7">Julio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>

                <select
                  onChange={handleInputDate}
                  name="year"
                  className="select_jv year_jv"
                  defaultValue={"DEFAULT"}
                >
                  <option disabled value="DEFAULT">
                    Año
                  </option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
              <div className="form_action--button_jv item_form_jv">
                <button
                  type="submit"
                  value="buscar"
                  className="item_buttom_jv item_add_jv"
                >
                  Reportar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="item_jv right_jv">
          <section className="container3_jv ">
            <p className="container_item3_jv p_jv ">FACTURA</p>
            <form
              autoComplete="off"
              className="container_item3_jv container_form3_jv form3_jv"
              onSubmit={repCodigo}
            >
              <div className="item_form3_jv">
                <label>Codigo de pedido</label>
                <input type="number" name="codigo" onChange={handleInputCodigo} />
              </div>

              <div className="form_action--button_jv item_form3_jv">
                <button
                  type="submit"
                  value="Reportar"
                  className="item_buttom_jv item_add_jv"

                >
                  Buscar
                </button>
             
              </div>
            </form>
            <form action="" className=" form3_jv">
                <label>Nit / CI</label>
                <input type="number" name="nit" onChange={handleInputNit} />
                <button
                  type="reset"
                  value="Limpiar"
                  className="item_buttom_jv item_alert_jv"
                  onClick={facturar}
                >
                  Facturar
                </button>
            </form>
            <p className="title_table_jv p_jv">DETALLE</p>
            <table className="container_item3_jv main_table_jv item_table_jv table_jv">
              <thead className="thead_jv">
                <tr className="tr_jv">
                  <th>CODIGO</th>
                  <th>DESCRIPCION</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {products.map((e) => (
                  <tr key={e.id} className="tr_jv">
                    <td className="td_jv" data-label="Codigo">
                      {e.id}
                    </td>
                    <td className="td_jv" data-label="Codigo">
                      {e.description}
                    </td>
                    <td className="td_jv" data-label="Codigo">
                      {e.amount}
                    </td>
                    <td className="td_jv" data-label="Codigo">
                      {e.price}
                    </td>
                    <td className="td_jv" data-label="Codigo">
                      {e.total}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="tfoot_jv ">
                <tr className="foot_fila_jv tr_jv">
                  <td className="td_jv">total </td>
                  <td className="td_jv">{cont}</td>
                </tr>
              </tfoot>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}

export default Section;

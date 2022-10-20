import React, { useState, useEffect } from "react";
import "./Section.css";
import "../api/db.json";
import prod from "../api/prod.json";
import settings from "../../../settings.json";
import { getDefaultNormalizer } from "@testing-library/react";
import add from "../../../assets/images/cashier/add.svg";
import addR from "../../../assets/images/cashier/addR.svg";
import load from "../../../assets/images/cashier/load.svg";
function Section() {
  const p = settings.puerto;
  const u = settings.url;
  let vp = [];
  const productsj = [
    { id: 1, description: "soda", amount: 2, price: 150, total: 300 },
    { id: 2, description: "ensalada", amount: 3, price: 15, total: 45 },
    { id: 3, description: "ensalada", amount: 3, price: 15, total: 45 },
  ];
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [pedido, setPedido] = useState([]);
  const [nit, setNit] = useState(0);
  const obtenerDatos = async () => {
    setProducts(productsj);
  };

  const getData = async () => {
    let url = u + p + "/api/orders/all-delivered";
    const response = await fetch(url);
    const data = await response.json();
    setPedido(data);
    console.log("hola");
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [datos, setDatos] = useState({
    fatherLastname: "",
    motherLastname: "",
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
  });

  const [date, setDate] = useState({
    year: "",
    month: "",
    flag: "",
  });

 

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
      let url = u + p + "/api/customers";
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
    if (codigo != null) {
      datoFactura();
    } else {
      alert("Error, no debe existir campos vacios");
    }
  };

  const datoFactura = async () => {
    console.log(codigo);
    let url = u + p + "/api/orders";
    const response = await fetch(url);

    //turning the response into the usable data
    const data = await response.json();

    //now do whatever your want with this data.
    console.log(data);

    let datosFil = data.filter(function (e) {
      return e.id === parseInt(codigo);
    });
    setOrder(datosFil);
    console.log(order);
    //obtenerDatos();
  };

  const [contT, setContT] = useState(0);
  const facturar = async () => {
    let cont = 0;
    console.log("siiii")
    for (let i = 0; i < vp.length; i++) {
      cont = cont + vp[i].price * vp[i].amount;
    }
    setContT(cont);
    setProducts(vp);
    setNit(0)
  };

  const detallar = () => {
    setContT(0);
    setProducts([]);
    vp=[]
    setNit(0)
    alert("¡¡¡¡Imprimiendo....!!!!")
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

  const putData = async (e) => {
    let datas={
      "idCashier": parseInt(localStorage.getItem("id")),
      "idCustomer": e.customer.id,
      "nit": parseInt( nit)
    }
    //console.log(datas)
    let url = u + p + "/api/orders/"+e.id+"/customer-info";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    });

    const data = await response.json();
    //console.log(data);
  };

  const editValue = (e) => {
    const filped = e.products;
    if (parseInt(nit.nit)> 0) {
      let isDelete = window.confirm(
        `¿esta seguro de seleccionar el pedido ${e.id} ?`
      );
      if (isDelete) {
        
        vp = [...vp, ...filped];
        console.log(vp)
        putData(e)

      } else {
        console.log("cancelado");
      }
    } else {
      alert("Error, no debe existir campos vacios (Nit/Ci)");
    }
    //Location.href = Location.href;
    //getData()

  };

  return (
    <>
      <div className="container_jv">
        <div className="item_jv left_jv">
          <div className="lefitem_jv left1_jv">
            <section className="main_1form_jv">
              <h3 className="item_1form_jv p_jv title_jv">DATOS DEL CLIENTE</h3>
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
              <h3 className="item1_it2_jv p_jv title_jv">REPORTE</h3>
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
            <h3 className="container_item3_jv p_jv ">FACTURA</h3>
            <div className="cont_pedido">
              <form action="" className=" nit_jv">
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
                <button
                  type="reset"
                  value="Limpiar"
                  className="item_buttom_jv item_add_jv"
                  onClick={detallar}
                >
                  Imprimir
                </button>
              </form>
              <div>
                <a href="#">
                  <img
                    src={load}
                    alt=""
                    className="action_jv_adm"
                    onClick={() => getData()}
                  />
                </a>
              </div>
              <div className="cont_ped_jv">
                <table className=" tb_ped">
                  <thead className="thead_jv">
                    <tr className="tr_jv">
                      <th> PEDIDO</th>
                      <th>MESA</th>
                      <th>ACCION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedido.map((e) => (
                      <tr key={e.id} className="tr_jv">
                        <td className="td_jv" data-label="Codigo">
                          {e.id}
                        </td>
                        <td className="td_jv" data-label="Codigo">
                          {e.table.number}
                        </td>
                        <td className="td_jv" data-label="Codigo">
                          <a href="#">
                            <img
                              src={add}
                              alt=""
                              className="action_jv_adm"
                              onClick={() => editValue(e)}
                            />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <h3 className="title_table_jv p_jv">DETALLE</h3>
            <table className="container_item3_jv main_table_jv item_table_jv table_jv">
              <thead className="thead_jv">
                <tr className="tr_jv">
                  <th>Nro</th>
                  <th>DESCRIPCION</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {products.map((e, key) => (
                  <tr key={key} className="tr_jv">
                    <td className="td_jv" data-label="Nro">
                      {key + 1}
                    </td>
                    <td className="td_jv" data-label="name">
                      {e.nameOrBrand}
                    </td>
                    <td className="td_jv" data-label="amount">
                      {e.amount}
                    </td>
                    <td className="td_jv" data-label="price">
                      {e.price} Bs
                    </td>
                    <td className="td_jv" data-label="total">
                      {e.price * e.amount} Bs
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="tfoot_jv ">
                <tr className="foot_fila_jv tr_jv">
                  <td className="td_jv">total </td>
                  <td className="td_jv">{contT} Bs</td>
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

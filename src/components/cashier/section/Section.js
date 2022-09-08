import React, {  useState } from "react";
import "./Section.css";
import "../api/db.json";
import prod from"../api/prod.json";
function Section() {
  const productsj = [
    { id: 1, description: "soda", amount: 2, price: 150, total: 300 },
    { id: 2, description: "ensalada", amount: 3, price: 15, total: 45 },
    { id: 3, description: "ensalada", amount: 3, price: 15, total: 45 }
  ];
  const [products, setProducts] = useState([]);
  const [total,setTotal]=useState(0);
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
    console.log(codigo);
  };
  const enviarDatos = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(datos),
    };

    let url = "http://localhost:8080/api/" + datos.rol;
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  const repCodigo = (e) => {
    e.preventDefault();
    console.log("codigo" + codigo);
  };

  const datoFactura = (e) => {
    obtenerDatos();
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
    setProducts([])
  };
  const report = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <div className="container_jv">
        <div className="item_jv left_jv">
          <div className="lefitem_jv left1_jv">
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
                  <select onChange={handleInputChange} name="rol">
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
          </div>
          <div className="lefitem_jv left2_jv">
            <form autoComplete="off" className="container2_jv" onSubmit={report}>
              <p className="item1_it2_jv p_jv">REPORTE</p>
              <div className="item_form2_jv">
                <select
                  onChange={handleInputDate}
                  name="flag"
                  className="select_jv sele_jv"
                >
                  <option disabled selected>
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
                >
                  <option disabled selected>
                    Mes
                  </option>
                  <option value="january">Enero</option>
                  <option value="february">Febrero</option>
                  <option value="march">Marzo</option>
                  <option value="april">Abril</option>
                  <option value="may">Mayo</option>
                  <option value="june">Junio</option>
                  <option value="july">Julio</option>
                  <option value="august">Agosto</option>
                  <option value="september">Septiembre</option>
                  <option value="october">Octubre</option>
                  <option value="november">Noviembre</option>
                  <option value="december">Diciembre</option>
                </select>

                <select
                  onChange={handleInputDate}
                  name="year"
                  className="select_jv year_jv"
                >
                  <option disabled selected>
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
                <input type="text" name="codigo" onChange={handleInputCodigo} />
              </div>

              <div className="form_action--button_jv item_form3_jv">
                <button
                  type="submit"
                  value="Reportar"
                  className="item_buttom_jv item_add_jv"
                  onClick={datoFactura}
                >
                  Buscar
                </button>
                <button
                  type="reset"
                  value="Limpiar"
                  className="item_buttom_jv item_alert_jv"
                  onClick={limpiaCod}
                >
                  Limpiar
                </button>
              </div>
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
                  <td className="td_jv">12</td>
                  <td className="td_jv">
                    <form action="">
                      <input
                        type="reset"
                        value="Facturar"
                        className="item_buttom_jv item_add_jv"
                      />
                    </form>
                  </td>
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

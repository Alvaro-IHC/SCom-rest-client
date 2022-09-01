import React from "react";
import "./Section.css";
function Section() {
  return (
    <>
      <div className="container">
        <div className="item left">
          <div className="lefitem left1">
            <section className="main_1form">
              <p className="item_1form">DATOS DEL CLIENTE</p>
              <form
                autocomplete="off"
                onsubmit="onFormSubmit() "
                className="item_1form item_1container"
              >
                <div className="item1">
                  <input
                    type="text"
                    name="productCode"
                    id="productCode"
                    placeholder="Apellido Parterno"
                  />
                </div>
                <div className="item1">
                  <input
                    type="text"
                    name="product"
                    id="product"
                    placeholder="Apellido Materno:"
                  />
                </div>
                <div className="item1">
                  <input type="text" name="qty" id="qty" placeholder="Nombre" />
                </div>
                <div className="item1">
                  <input
                    type="text"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Email"
                  />
                </div>
                <div className="item1">
                  <input
                    type="text"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div className="item1">
                  <input
                    type="password"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="item1">
                  <input
                    type="text"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Direccion"
                  />
                </div>
                <div className="form_action--button item1">
                  <input
                    type="submit"
                    value="Agregar"
                    className="item_buttom item_add"
                  />
                  <input
                    type="reset"
                    value="Limpiar"
                    className="item_buttom item_alert"
                  />
                </div>
              </form>
            </section>
          </div>
          <div className="lefitem left2">
            <form
              autocomplete="off"
              onsubmit="onFormSubmit() "
              className="container2"
            >
              <p className="item1_it2">REPORTE</p>
              <div className="item_form2">
                <input type="radio" name="estado" value="a" className="inp"/>
                ingreso
                <input type="radio" name="estado" value="" checked className="inp"/>
                egreso
              </div>
              <div className="item_form2">
                <label for="perPrice">Mes:</label>
                <input type="date" name="perPrice" id="perPrice" className="inp"/>
              </div>
              <div className="form_action--button item_form">
                <input
                  type="submit"
                  value="buscar"
                  className="item_buttom item_add"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="item right">
        <section className="container3 ">
      <p className="container_item3 ">FACTURA</p>
      <form
        autocomplete="off"
        onsubmit="onFormSubmit() "
        className="container_item3 container_form3 form3"
      >
        <div className="item_form3">
          <label for="perPrice">Codigo de pedido</label>
          <input type="text" name="perPrice" id="perPrice" />
        </div>
   
        <div className="form_action--button item_form3">
          <input
            type="submit"
            value="Agregar"
            className="item_buttom item_add"
          />
          <input
            type="reset"
            value="Limpiar"
            className="item_buttom item_alert"
          />
        </div>
      </form>
      <p className="title_table">DETALLE</p>
      <table className="container_item3 main_table item_table">
        <thead>
          <tr>
            <th>CODIGO</th>
            <th>DESCRIPCION</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th>TOTAL</th>
            <th>ACCION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15-DS</td>
            <td>soda</td>
            <td>2</td>
            <td>15</td>
            <td>30</td>
            <td>
              <form action="">
                <input
                  type="reset"
                  value="Eliminar"
                  className="item_buttom item_alert"
                />
              </form>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="foot_fila">
            <td>total </td>
            <td>12</td>
            <td>
              <form action="">
                <input
                  type="reset"
                  value="Facturar"
                  className="item_buttom item_add"
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

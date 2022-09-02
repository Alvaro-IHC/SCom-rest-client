import React from "react";
import "./Section.css";
function Section() {
  return (
    <>
      <div className="container_jv">
        <div className="item_jv left_jv">
          <div className="lefitem_jv left1_jv">
            <section className="main_1form_jv">
              <p className="item_1form_jv p_jv">DATOS DEL CLIENTE</p>
              <form
                autocomplete="off"
                onsubmit="onFormSubmit() "
                className="item_1form_jv item_1container_jv"
              >
                <div className="item1_jv">
                  <input
                    type="text"
                    name="productCode"
                    id="productCode"
                    placeholder="Apellido Parterno"
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="product"
                    id="product"
                    placeholder="Apellido Materno:"
                  />
                </div>
                <div className="item1_jv">
                  <input type="text" name="qty" id="qty" placeholder="Nombre" />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Email"
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="password"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="item1_jv">
                  <input
                    type="text"
                    name="perPrice"
                    id="perPrice"
                    placeholder="Direccion"
                  />
                </div>
                <div className="form_action--button_jv item1_jv">
                  <input
                    type="submit"
                    value="Agregar"
                    className="item_buttom_jv item_add_jv"
                  />
                  <input
                    type="reset"
                    value="Limpiar"
                    className="item_buttom_jv item_alert_jv"
                  />
                </div>
              </form>
            </section>
          </div>
          <div className="lefitem_jv left2_jv">
            <form
              autocomplete="off"
              onsubmit="onFormSubmit() "
              className="container2_jv"
            >
              <p className="item1_it2_jv p_jv">REPORTE</p>
              <div className="item_form2_jv">
                <input type="radio" name="estado" value="a" className="inp_jv"/>
                ingreso
                <input type="radio" name="estado" value="" checked className="inp_jv"/>
                egreso
              </div>
              <div className="item_form2_jv">
                <label for="perPrice">Mes:</label>
                <input type="date" name="perPrice" id="perPrice" className="inp_jv"/>
              </div>
              <div className="form_action--button_jv item_form_jv">
                <input
                  type="submit"
                  value="buscar"
                  className="item_buttom_jv item_add_jv"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="item_jv right_jv">
        <section className="container3_jv ">
      <p className="container_item3_jv p_jv ">FACTURA</p>
      <form
        autocomplete="off"
        onsubmit="onFormSubmit() "
        className="container_item3_jv container_form3_jv form3_jv"
      >
        <div className="item_form3_jv">
          <label for="perPrice">Codigo de pedido</label>
          <input type="text" name="perPrice" id="perPrice" />
        </div>
   
        <div className="form_action--button_jv item_form3_jv">
          <input
            type="submit"
            value="Agregar"
            className="item_buttom_jv item_add_jv"
          />
          <input
            type="reset"
            value="Limpiar"
            className="item_buttom_jv item_alert_jv"
          />
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
            <th>ACCION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr_jv">
            <td className="td_jv" data-label="Codigo">15-DS</td>
            <td className="td_jv" data-label="Descripcion">soda</td>
            <td className="td_jv"data-label="Cantidad">2</td>
            <td className="td_jv" data-label="Precio">15</td>
            <td className="td_jv" data-label="Total">30</td>
            <td className="td_jv" data-label="Accion">
              <form action="">
                <input
                  type="reset"
                  value="Eliminar"
                  className="item_buttom_jv item_alert_jv"
                />
              </form>
            </td>
          </tr>
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

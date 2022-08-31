import React from 'react'
import "./main.css";
const Main = () => {
  return (
    <>
      <main className="container">
        <section className="container_item item1">
            
            <section className="item1_it it1">
                <h1 className="item1_it">DATOS DEL CLIENTE</h1>
                <form autocomplete="off" onsubmit="onFormSubmit() " className="main_form">
                    <div className="item_form">
                        <label for="productCode">Apellido Paterno:</label>
                        <input type="text" name="productCode" id="productCode"/>
                    </div>
                    <div className="item_form">
                        <label for="product">Apellido Materno:</label>
                        <input type="text" name="product" id="product"/>
                    </div>
                    <div className="item_form">
                        <label for="qty" className="it">Nombre:</label>
                        <input type="text" name="qty" id="qty" />
                    </div>
                    <div className="item_form">
                        <label for="perPrice" >Email:</label>
                        <input type="text" name="perPrice" id="perPrice" />
                    </div>
                    <div className="item_form">
                        <label for="perPrice" >Nombre de usuario:</label>
                        <input type="text" name="perPrice" id="perPrice" />
                    </div>
                    <div className="item_form">
                        <label for="perPrice" >Contraseña:</label>
                        <input type="password" name="perPrice" id="perPrice" />
                    </div>
                    <div className="item_form">
                        <label for="perPrice" >direccion:</label>
                        <input type="text" name="perPrice" id="perPrice" />
                    </div>
                    <div className="form_action--button item_form">
                        <input type="submit" value="Agregar" className="item_buttom item_add"/>
                        <input type="reset" value="Limpiar"className="item_buttom item_alert"/>
                    </div>
                </form>

            </section>
            <section className="item1_it it2">

                <form autocomplete="off" onsubmit="onFormSubmit() " className="form3">
                    <h1 className="item1_it">REPORTE</h1>
                    <div className="item_form">
                        <input type="radio" name="estado" value="a" />ingreso
                        <input type="radio" name="estado" value="" checked />egreso
                    </div>
                    <div className="item_form">
                        <label for="perPrice" >Cantidad:</label>
                        <input type="date" name="perPrice" id="perPrice" />
                    </div>
                    <div className="form_action--button item_form">
                        <input type="submit" value="buscar" className="item_buttom item_add"/>

                    </div>   
    
                </form>

            </section>
        </section>
        <section className="container_item item2">
            <h1 className="item1_it">FACTURA</h1>
            <form autocomplete="off" onsubmit="onFormSubmit() " className="item2_agregar form2">
                
                <div className="item_form">
                    <label for="perPrice" >Codigo</label>
                    <input type="text" name="perPrice" id="perPrice"/ >
                </div>
                <div className="item_form">
                    <label for="perPrice" >Cantidad:</label>
                    <input type="number" name="perPrice" id="perPrice" />
                </div>
                <div className="form_action--button item_form">
                    <input type="submit" value="Agregar" className="item_buttom item_add"/>
                    <input type="reset" value="Limpiar"className="item_buttom item_alert"/>
                </div>   

            </form>
            <table className="main_table">
                <caption><h1 className="item1_it">DETALLE</h1></caption>
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
                            <input type="reset" value="Eliminar"className="item_buttom item_alert"/>
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
                                <input type="reset" value="Facturar"className="item_buttom item_add"/>
                               </form>
                        </td>
                    </tr>
        
                </tfoot>
            </table>
        </section>
    </main>
    </>
  )
}

export default Main

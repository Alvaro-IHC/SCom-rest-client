import React from 'react'

function Waiter({enviarDatos, handleInputChange, limpiar, datos}) {
  
  return (
    <>
           <section className="main_1form_jv_adm">
          <p className="item_1form_jv_adm p_jv_adm">DATOS DEL CAMARERO</p>
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

              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="motherLastname"
                placeholder="Apellido Materno:"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="address"
                placeholder="Direccion"
                onChange={handleInputChange}
              />
            </div>

            <div className="item1_jv_adm">
              <input
                type="text"
                name="salary"
                placeholder="Salario"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="experience"
                placeholder="Experiencia"
                onChange={handleInputChange}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="healthCode"
                placeholder="Codigo de sanidad"
                onChange={handleInputChange}
              />
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
    </>
  )
}

export default Waiter

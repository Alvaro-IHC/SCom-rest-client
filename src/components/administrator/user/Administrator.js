import React from 'react'

function Administrator({enviarDatos, handleInputChange, limpiar, datos}) {
  return (
    <>
          <section className="main_1form_jv_adm">
          <p className="item_1form_jv_adm p_jv_adm">DATOS DEL ADMINISTRADOR</p>
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

            <div className="item1_jv_adm">
              <input
                type="number"
                name="salary"
                placeholder="Salario"
                onChange={handleInputChange}
                value={datos.salary}
              />
            </div>
            <div className="item1_jv_adm">
              <input
                type="text"
                name="specialty"
                placeholder="Especializacion"
                onChange={handleInputChange}
                value={datos.specialty}
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

export default Administrator


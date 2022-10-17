
import React from 'react'

export default function Edit(update, handleOnchange, datos) {
  return (
    <>
    <form
    autoComplete="off"
    className="item_1form_jv_adm item_1container_jv_adm form_system"
    onSubmit={update}
  >
    <div className="item1_jv_adm">
      <label htmlFor="capacity">capacidad</label>
      <input
        name="capacity"
        onChange={handleOnchange}
        placeholder="Capadidad"
        type="number"
        value={datos.capacity}
      ></input>
    </div>
    <div className="item1_jv_adm">
      <label htmlFor="number">numero</label>
      <input
        name="number"
        onChange={handleOnchange}
        placeholder="numero"
        type="number"
        value={datos.number}
      ></input>
    </div>
    <div className="form_action--button_jv_adm item1_jv_adm">
      <button
        type="submit"
        value="Agregar"
        className="item_buttom_jv_adm item_add_jv_adm"
      >
        Crear
      </button>
    </div>
  </form>
</>
  )
}


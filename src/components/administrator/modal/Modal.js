import React, { useState } from 'react'
import "./Modal.css"
import close from"../../../assets/images/administrator/close.svg"
function Modal({children, estadoM,
    setEstadoM, setDatos,initailForm}) {
    
  return (
    <>
    {estadoM &&
    <div className='container_modal'>
        <div className='container_datos'>
            <header className='container_title'>
                <h1>Editar</h1>
            </header>
            <button className='modal_button' onClick={()=>{setEstadoM(false);setDatos(initailForm)}}>
                <img src={close} className="modal_logo"></img>
            </button>
            {children}
        </div>
    </div>
    }
    </>
  )
}

export default Modal
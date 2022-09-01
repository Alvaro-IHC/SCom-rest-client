import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
const infocentro ={
    orden: "aqui va el contenido de la orden que deberia tener la parte izquierda",
    nomborden: "nombre de la orden"
}
function Centro(){
    return <div>
        <div class="container px-4 text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light">
                                <p>{infocentro.orden}</p>
                                <button type="button" class="btn btn-danger">Cancelar</button>
                                <button type="button" class="btn btn-success">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
}
export{Centro}
export{infocentro}
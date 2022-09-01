import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"


import {Centro, infocentro} from "./centro/Centro"
import {Derecha} from "./derecha/Derecha"
import {Cabecera} from "./cabecera/Cabecera"
const root = ReactDOM.createRoot(document.getElementById('root'))


function Pbody(){
    return <div> <br></br>
        <div class="container overflow-hidden text-center">
        <div class="row gx-5">
        <div class="col">
        <div class="p-3 border bg-light"><b>Ordenes</b>
            <br></br>
            <br></br>
            {Izquierda}
            </div>            
        </div>
        <div class="col">
            <div class="p-3 border bg-light"><b>{infocentro.nomborden}</b>
            <br></br>
            <br></br>        
            {Centro()}            
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light"><b>Solicitar ingrediente</b>
            <br></br>
            <br></br>
            {Derecha()}
            </div>            
        </div>
        </div>
    </div>
  </div>
}

function Izquierda(){
    
}



export {Pbody}
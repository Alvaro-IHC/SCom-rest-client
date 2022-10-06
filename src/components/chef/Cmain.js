import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./../cashier/header/Header"

import {Centro, infocentro} from "./centro/Centro"
import {Derecha} from "./derecha/Derecha"
import {Izquierda} from "./Izquierda/Izquierda"
const root = ReactDOM.createRoot(document.getElementById('root'))


function Pbody(){
    return <div> 
        <Header/>
        <br></br>
        <div className="container px-0 text-center">
        <div className="row gx-2">
        <div className="col">
        <div className="p-3 border bg-light"><b>Ordenes</b>
            <br></br>
            <br></br>
            {Izquierda()}
            </div>            
        </div>
        <div className="col">
            <div className="p-3 border bg-light"><b>Platos existentes</b>
            <br></br>
            <br></br>        
            {Centro()}            
            </div>
        </div>
        <div className="col">
            <div className="p-3 border bg-light"><b>Solicitar ingrediente</b>
            <br></br>
            <br></br>
            {Derecha()}
            </div>            
        </div>
        </div>
    </div>
  </div>
}
export {Pbody}
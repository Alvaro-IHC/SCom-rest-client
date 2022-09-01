import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import Logoimgage from "./img/logo192.png"
function Cabecera(){
    return <div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={Logoimgage} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                    Nombre restaurante
                </a>
            </div>
        </nav>
    </div>
    
}
export{Cabecera}
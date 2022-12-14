import React, { useEffect, useState } from "react";
import edit from "../../../assets/images/administrator/edit.svg";
import trash from "../../../assets/images/administrator/trash.svg";
import "./System.css";
import settings from "../../../settings.json";
import Modal from "../modal/Modal";

function System() {
  const [products, setProducts] = useState([]);
  const [estado, setEstado] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [bd, setBd] = useState([]);

  const p = settings.puerto;
  const u = settings.url;
  const [datos, setDatos] = useState({
    question: "",
    answer: "",
  });

  const [datosV, setDatosV] = useState({
    adminId:"",
    mission: "",
    vision: "",
  });
  const editValue = (e) => {
    console.log(e)
    setEstado(!estado);
    setDataToEdit(e)



  };

  useEffect(() => {
    let url = u + p + "/api/question-answers";
    const options = { method: "GET" };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => cargar(response))
      .catch((err) => console.error(err));
  }, []);

  const cargar = (response) => {
    setProducts(response);
    setBd(response);

  };
  const deletValue = (e) => {
    console.log(e);
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${e.id}'?`
    );

    if (isDelete) {
      console.log("eliminado");
    } else {
      console.log("cancelado");
    }
  };

  useEffect(() => {
    if (dataToEdit) {
      setDatos(dataToEdit);
    } else {
      setDatos(initailForm);
    }
  }, [dataToEdit]);

  const initailForm = {
    question: "",
    answer: ""

  };

  const limpiar = () => {
    setDatos({
      question: "",
      answer: ""
    });
  };

  const limpiarV = () => {
    setDatosV({
      adminId:"",
      mission: "",
      vision: "",
    });
  };
  const handleInputChange = (e) => {
    setDatos((datos) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMision=(e)=>{
    setDatosV((datosV) => ({
      ...datosV,
      [e.target.name]: e.target.value,
    }));
  }
  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(datos);
    let url = u + p + "/api/question-answers/" +datos.id+"?adminId="+localStorage.getItem("id");
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(datos),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    let isDelete = window.confirm(
      `Datos actulizados `
    );

    if(isDelete){
      setEstado(!estado)
      url = u + p + "/api/question-answers";
      const options = { method: "GET" };
  
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => cargar(response))
        .catch((err) => console.error(err));
      Location.href=Location.href;
    }

  };

  
  const enviarDatosV = (e) => {
    e.preventDefault();
    datosV.adminId=localStorage.getItem("id")
    console.log(datosV)
    if (
      datosV.vision.length > 0 &&
      datosV.mission.length > 0 
    ) {
      const options = {
        method: "POST",
        body: JSON.stringify(datosV),
        headers: {
          "Content-Type": "application/json",
        },
      };
      let url = u + p + "/api/mission-vision" ;
      console.log(url);
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
      alert("datos guardados")
    } else {
      window.confirm(`Error, no debe existir campos vacios`);
    }
    limpiarV();
  };

  return (
   <>
   <h1 className="title_jv_adm">Sistema</h1>
    <div className="container_system">
        
      <table className="table_jv_adm  item_systemLeft">
        <thead className="thead_jv_adm">
          <tr className="tr_jv_adm">
          <th className="title_adm">Nro</th>
            <th className="title_adm">PREGUNTAS</th>
            <th className="title_adm">RESPUESTAS</th>
            <th className="title_adm">ACCION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, key) => (
            <tr key={e.id} className="tr_jv_adm">
              <td className="td_jv_adm" data-label="question">
                {key}
              </td>
              <td className="td_jv_adm" data-label="question">
                {e.question}
              </td>
              <td className="td_jv_adm" data-label="answer">
                {e.answer}
              </td>
              <td className="td_jv_adm" data-label="ACCION">
                <a href="#">
                  <img
                    src={edit}
                    alt=""
                    className="action_jv_adm"
                    onClick={() => editValue(e)}
                  />
                </a>
                <a>
                  <img
                    src={trash}
                    alt=""
                    className="action_jv_adm"
                    onClick={() => deletValue(e)}
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="item_systemRight">
      <form
            autoComplete="off"
            className="item_1form_jv_adm item_1container_jv_adm form_system"
            onSubmit={enviarDatosV}
          >
            <div className="item1_jv_adm">
            <label htmlFor="mission">Mision</label>
              <textarea name="mission" id="" cols="30" rows="3" onChange={handleMision} value={datosV.mission}></textarea>
            </div>
            <div className="item1_jv_adm">
              <label htmlFor="vision">Vision</label>
              <textarea name="vision" id="" cols="30" rows="3" onChange={handleMision} value={datosV.vision}></textarea>
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
                onClick={limpiarV}
              >
                Limpiar
              </button>
            </div>
          </form>
      </div>
      <Modal estadoM={estado} setEstadoM={setEstado} setDatos={setDatos}
        initailForm={initailForm} productsj>
        <section className="main_1form_jv_adm">
          <p className="item_1form_jv_adm p_jv_adm">Preguntas y Respuestas</p>
          <form
            autoComplete="off"
            className="item_1form_jv_adm item_1container_jv_adm"
            onSubmit={enviarDatos}
          >
            <div className="item1_jv_adm">
              <textarea  type="text"
                name="question"
                placeholder="Pregunta"
                onChange={handleInputChange}
                value={datos.question}
                className="input_system" cols="30" rows="5"></textarea>
                
            </div>
            <div className="item1_jv_adm">
              <textarea   type="text"
                name="answer"
                placeholder="Respuesta:"
                onChange={handleInputChange}
                value={datos.answer}
                className="input_system"cols="30" rows="5"></textarea>

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
      </Modal>
    </div>

    </> 
  );
}

export default System;

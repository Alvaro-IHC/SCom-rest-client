import React from "react";
import { useState, useEffect } from "react";
import "./Index.css";
import settings from "../../../settings.json";
import add from "../../../assets/images/administrator/add.svg";
import edit from "../../../assets/images/administrator/edit.svg";
import updata from "../../../assets/images/administrator/update.png";
import Modal from "../modal/Modal";
import Edit from "./Edit";

export default function Index() {
  const p = settings.puerto;
  const u = settings.url;
  const [estado, setEstado] = useState(false);
  const [datos, setDatos] = useState({
    capacity: "",
    number: "",
  });
  const [tables, setTables] = useState([]);
  const [waiters, setWaiters] = useState([]);
  const [waitersA, setWaitersA] = useState([]);
  const [number, setNumber] = useState({
    number: "",
  });
  const [idT, setIdT] = useState(0);
  const [viU, setViU] = useState([]);
  let vw = [];
  let vi = [];
  let vwd = [];

  const handleOnchange = (e) => {
    setDatos((datos) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnchangeN = (e) => {
    setNumber((number) => ({
      ...number,
      [e.target.name]: e.target.value,
    }));
  };
  const initailForm = {
    capacity: "",
    number: "",
  };
  const getData = async () => {
    let url = u + p + "/api/tables";
    const response = await fetch(url);
    const data = await response.json();
    setTables(data);
  };
  const getUsers = async () => {
    let url = u + p + "/api/users";
    const response = await fetch(url);
    const data = await response.json();
    let datosFil = data.filter(function (e) {
      return e.role === "waiter";
    });
    setWaiters(datosFil);
  };
  useEffect(() => {
    getData();
    getUsers();
  }, []);

  const postData = async () => {
    let url = u + p + "/api/tables";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json();
  };
  const putData = async () => {
    let vws = vi.concat(vw);
    console.log(vws);
    let url = u + p + "/api/tables/" + number.number + "/waiters";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vws),
    });

    const data = await response.json();
    console.log(data);
    setNumber({
      number: "",
    });
    vw = [];
    vi = [];
  };

  const putDataD = async () => {

    let url = u + p + "/api/tables/" +idT + "/waiters";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(viU),
    });

    const data = await response.json();
    console.log(data);
    setNumber({
      number: "",
    });
     
  };

  const enviarDatosV = (e) => {
    e.preventDefault();
    console.log(datos);
    if (datos.capacity.length > 0 && datos.number.length > 0) {
      console.log(tables);
      let datosFil = tables.filter(function (e) {
        return e.number === datos.number;
      });
      console.log(datosFil);
      if (datosFil.length > 0) {
        alert("Error, La mesa " + datos.number + " ya existe");
      } else {
        if (parseInt(datos.capacity) >= 0 && parseInt(datos.number) >= 0) {
          postData();
          alert(" La mesa " + datos.number + " fue adicionado exitosamente");
          console.log(datos);
          setDatos(initailForm);
        } else {
          alert(" Error, no debe existir numeros negativos");
        }
      }
    } else {
      alert("Error, no debe existir campos vacios");
    }
    console.log(datos);
    getData();
  };

  const addWaiter = (e) => {
    if (number.number.length > 0) {
      let datosFil = tables.filter(function (e) {
        return e.id === parseInt(number.number);
      });
      let pw = datosFil[0].waiters;
      vi = pw.map((e) => e.id);
      if (pw.some((pw) => pw.id === e.id)) {
        alert(
          "Alerta, " +
            e.name +
            " ya fue asignada a la mesa con ID" +
            number.number
        );
      } else {
        if (vw.some((vw) => vw === e.id)) {
          alert("Alerta, " + e.name + " ya fue seleccionado");
        } else {
          let isDelete = window.confirm(
            `??Esta seguro de agregar a '${e.name}' ?`
          );
          if (isDelete) {
            vw.push(e.id);
            console.log(vw);
          }
        }
      }
    } else {
      alert("Error, no debe existir campos vacios");
    }
  };

  const sendWaiter = (e) => {
    e.preventDefault();
    console.log(number);
    let datosFil = tables.filter(function (e) {
      return e.id === parseInt(number.number);
    });
    if (number.number.length > 0) {
      if (datosFil.length > 0) {
        if (vw.length > 0) {
          putData();
          alert("Datos guardados");
        } else {
          alert("Error, debe seleccionar al menos un mesero");
        }

        console.log(datosFil);
      } else {
        alert("Error, La mesa " + number.number + " no existe");
      }
    } else {
      alert("Error, no debe existir campos vacios");
    }
    Location.href = Location.href;
    getData();
  };

  const putDataTable = async () => {
    let url = u + p + "/api/tables/" + idT;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json();
    console.log(data);
  };

  const editTable = (e) => {
    console.log(e);
    setIdT(e.id);
    setEstado(true);
    setWaitersA(e.waiters);
    let obj = {
      capacity: e.capacity,
      number: e.number,
    };
    setDatos(obj);
    let pw = e.waiters;
    console.log(pw);
    vi = pw.map((e) => e.id);
    setViU(vi);
  };


  const update = (e) => {
    e.preventDefault();
    console.log("actulizando");
    putDataTable( );
    putDataD()
    getData()
    setEstado(false);
    Location.href = Location.href;
  };

  const deleteWaiter = (e) => {
    let isDelete = window.confirm(`??Esta seguro de eliminar a '${e.name}' ?`);
    if (isDelete) {
      let ix = viU.indexOf(e.id);
      viU.splice(ix, 1);
      console.log(ix);
      console.log(viU);
      vwd.push(e.id);
    }

  };
  return (
    <>
      <h1 className="title_jv_adm">Mesa</h1>
      <div className="container_tb">
        <div className="left_tb">
          <div className="item1">
            <h4>Crear mesa</h4>
            <form
              autoComplete="off"
              className="item_1form_jv_adm item_1container_jv_adm form_system"
              onSubmit={enviarDatosV}
            >
              <div className="item1_jv_adm">
                <input
                  name="capacity"
                  onChange={handleOnchange}
                  placeholder="Capadidad"
                  type="number"
                  value={datos.capacity}
                ></input>
              </div>
              <div className="item1_jv_adm">
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
            <h4>Asignar camareros</h4>
          </div>
          <div className="item2">
            <form
              autoComplete="off"
              className="item_1form_jv_adm "
              onSubmit={sendWaiter}
            >
              <div className="item1_jv_adm">
                <input
                  name="number"
                  onChange={handleOnchangeN}
                  value={number.number}
                  placeholder="ID mesa"
                  type="number"
                ></input>
              </div>
              <div className="form_action--button_jv_adm item1_jv_adm">
                <button
                  type="submit"
                  value="Agregar"
                  className="item_buttom_jv_adm item_add_jv_adm"
                >
                  Asignar
                </button>
              </div>
            </form>
            <table className="table_jv_adm  ">
              <thead className="thead_jv_adm">
                <tr className="tr_jv_adm">
                  <th className="title_adm">Nro</th>
                  <th className="title_adm">Nombre</th>
                  <th className="title_adm">Apellido Paterno</th>
                  <th className="title_adm">ACCION</th>
                </tr>
              </thead>
              <tbody>
                {waiters.map((e, key) => (
                  <tr key={e.id} className="tr_jv_adm">
                    <td className="td_jv_adm">{key}</td>
                    <td className="td_jv_adm">{e.name}</td>
                    <td className="td_jv_adm">{e.fatherLastname}</td>
                    <td className="td_jv_adm" data-label="ACCION">
                      <a href="#">
                        <img
                          src={add}
                          alt=""
                          className="action_jv_adm"
                          onClick={() => addWaiter(e)}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="right_tb">
          <h4>Actualizar </h4>
          <a href="#">
            <img
              src={updata}
              alt=""
              className="adm_img"
              onClick={() => getData()}
            />
          </a>
          <table className="table_jv_adm  table_jv">
            <thead className="thead_jv_adm">
              <tr className="tr_jv_adm">
                <th className="title_adm">ID</th>
                <th className="title_adm">Numero de mesa</th>
                <th className="title_adm">Capacidad</th>
                <th className="title_adm">Accion</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((e, key) => (
                <tr key={e.id} className="tr_jv_adm">
                  <td className="td_jv_adm">{e.id}</td>
                  <td className="td_jv_adm">{e.number}</td>
                  <td className="td_jv_adm">{e.capacity}</td>
                  <td className="td_jv_adm">
                    <a href="#">
                      <img
                        src={edit}
                        alt=""
                        className="action_jv_adm"
                        onClick={() => editTable(e)}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        estadoM={estado}
        setEstadoM={setEstado}
        productsj
        setDatos={setDatos}
        initailForm={initailForm}
      >
        {/*<Edit update={update} handleOnchange={handleOnchange} datos={datos}/>*/}

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
              Actualizar
            </button>
          </div>
        </form>
        <div className="cont_form_jv">
          <h4>Lista de los camareros asignados a la mesa </h4>
          <table className="table_jv_adm  ">
            <thead className="thead_jv_adm">
              <tr className="tr_jv_adm">
                <th className="title_adm">Nro</th>
                <th className="title_adm">Nombre</th>
                <th className="title_adm">Apellido Paterno</th>
                <th className="title_adm">ACCION</th>
              </tr>
            </thead>
            <tbody>
              {waitersA.map((e, key) => (
                <tr key={e.id} className="tr_jv_adm">
                  <td className="td_jv_adm">{key}</td>
                  <td className="td_jv_adm">{e.name}</td>
                  <td className="td_jv_adm">{e.fatherLastname}</td>
                  <td className="td_jv_adm" data-label="ACCION">
                    <a href="#">
                      <img
                        src={add}
                        alt=""
                        className="action_jv_adm"
                        onClick={() => deleteWaiter(e)}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}

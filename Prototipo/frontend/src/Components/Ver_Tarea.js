import React, { useState } from "react";
import axios from 'axios'; //Compartir recursos entre servidores;
import { Link } from 'react-router-dom'
import { InputGroup } from "react-bootstrap";
import {
  Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,
} from "reactstrap";

import '../Styles/Ver_Tarea.css'
import '../Styles/Recordatorio.css'

const url = "http://localhost:5000/api/tarea/?id=1";

class Ver_Tarea extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        id: '',
        titulo: '',
        descripcion: '',
        fecha: '',
        minutos: '',
        horas: '',
        dias: '',
        id_usuario: '1'
      }
    }
  }

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  seleccionarTarea = (tarea) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: tarea.id,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        fecha: tarea.fecha,
        minutos: tarea.minutoss,
        horas: tarea.horas,
        dias: tarea.dias,
        id_usuario: tarea.id_usuario
      }
    })
  }

  peticionesGet = () => {
    axios.get(url).then(response => {
      this.setState({ data: response.data })
    }).catch(error => {
      console.log(error.message);
    })
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  componentDidMount() {
    this.peticionesGet();
  }


  render() {
    function continuar() {
      var ver_tarea = document.getElementById("ver_tarea");
      var recordatorio = document.getElementById("recordatorio");
      var i = 0

      if (i == 0) {
        console.log(i);
        ver_tarea.style.display = "none";
        recordatorio.style.display = "block";
      } else {
        console.log("¡Error!")
      }
    }

    function continuar2() {
      var ver_tarea = document.getElementById("ver_tarea");
      var recordatorio = document.getElementById("recordatorio");
      var i = 0

      if (i == 0) {
        console.log(i);
        ver_tarea.style.display = "block";
        recordatorio.style.display = "none";

        console.log("Segunda vuelta: " + i);
        i++;
        console.log("Tercera vuelta: " + i);
      } else {
        console.log("¡Error!")
      }
    }

    return (
      <div className="Ver_Tarea">
        <div id="ver_tarea">
          <h1> Ver tarea </h1>

          <div className="contenedor">
            <h4> Título </h4>
            {this.state.data.map(tarea => {
              return (
                <p> {tarea.titulo} </p>
              )
            })}
            <div className="Rayita"></div>

            <h3>Descripción </h3>
            <div className="text">
              {this.state.data.map(tarea => {
                return (
                  <p> {tarea.descripcion} </p>
                )
              })}
            </div>

            <h4> Fecha límite </h4>
            {this.state.data.map(tarea => {
              return (
                <p> {tarea.fecha} </p>
              )
            })}
            <div className="Rayita"></div>

            <div className="Botones center_txt">
              <div className="Botones1">
                <button onClick={continuar}>Recordatorio</button>
              </div>
              <Link to="/Tablero"> <button>Continuar</button>{" "} </Link>
            </div>
          </div>
        </div>

        <div className="Recordatorio" id="recordatorio">
          <h1> Recordatorio </h1>

          <div className="contenedor">
            <div className="item">
              <h3> Minutos</h3>
              {this.state.data.map(tarea => {
                return (
                  <p> {tarea.minutos} </p>
                )
              })}
            </div>

            <div className="item">
              <h3> Horas </h3>
              {this.state.data.map(tarea => {
                return (
                  <p> {tarea.horas} </p>
                )
              })}
            </div>

            <div className="item">
              <h3> Días </h3>
              {this.state.data.map(tarea => {
                return (
                  <p> {tarea.dias} </p>
                )
              })}
            </div>

            {this.state.tipoModal == 'insertar'}
            <button onClick={continuar2}>Volver</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ver_Tarea
import React, { useState } from "react";
import axios from 'axios'; //Compartir recursos entre servidores;
import { Link } from 'react-router-dom'
import { InputGroup } from "react-bootstrap";
import {
  Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,
} from "reactstrap";

import "../Global.css";
import "../Styles/Calendario.css"
import "../Styles/Recordatorio.css";
import "../Styles/Ingresar_Tarea.css";

const url = "http://localhost:5000/api/tarea/";

class Ingresar_Tarea extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        id: 1,
        titulo: '',
        descripcion: '',
        fecha: '',
        minutos: '',
        horas: '',
        dias: '',
        id_usuario: 1
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
        id: 2,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        fecha: tarea.fecha,
        minutos: tarea.minutoss,
        horas: tarea.horas,
        dias: tarea.dias,
        id_usuario: 1
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

  peticionesPost = async () => {
    await axios.post(url, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  peticionesPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  PeticionesDelete = () => {
    axios.delete(url + this.state.form.id).then(response => {
      this.setState({ modalEliminar: false });
      this.peticionesGet();
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
    /*
      Funciones
    */
    const { form } = this.state;

    function continuar() {
      var ingresar_tarea = document.getElementById("ingresar_tarea");
      var recordatorio = document.getElementById("recordatorio");
      var i = 0

      if (i == 0) {
        console.log(i);
        ingresar_tarea.style.display = "none";
        recordatorio.style.display = "block";

        console.log("Segunda vuelta: " + i);
        i++;
        console.log("Tercera vuelta: " + i);
      } else {
        console.log("¡Error!")
      }
    }

    function escribir() {
      var id = document.getElementById("id");
      var id_usuario = document.getElementById("id_usuario");
      console.log("Hola")
      id.defaultValues = "9"
      id_usuario.defaultValue = "1"
      console.log("mundo")
    }
    /*
      Funciones
    */
    return (
      <div className="Ingresar_Tarea">
        <div id="ingresar_tarea">
          <h1> Ingresar tarea </h1>

          <div className="contenedor">
            
            <input className="form-control none" type="text" name="id" id="id" onChange={this.handleChange} value={this.state.form ? this.state.form.id : '9'} />
            <input className="form-control" type="text" name="id_usuario" id="id_usuario" onChange={this.handleChange} value={this.state.form ? this.state.form.id_usuario : '1'} />

            <h4> Título </h4>

            <input className="form-control" type="text" name="titulo" id="titulo" onChange={this.handleChange} value={this.state.form ? this.state.form.titulo : ''} />

            <div className="Rayita"></div>

            <h3>Descripción </h3>
            <input className="form-control text" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={this.state.form ? this.state.form.descripcion : ''} />

            <h3>Fecha límite (DD/MM/YY)</h3>
            <input className="form-control" type="text" name="fecha" id="fecha" onChange={this.handleChange} value={this.state.form ? this.state.form.fecha : ''} />

            <div className="Botones">
              <button className="btn_continuar" onClick={continuar}>Continuar</button>
              <button className="btn_continuar" onClick={escribir}>Escribir</button>
            </div>

          </div>
        </div>


        
        <div className="Recordatorio" id="recordatorio">
          <h1> Recordatorio </h1>

          <div className="contenedor">
            <div className="item">
              <h3> Minutos</h3>
              <input className="form-control" type="text" name="minutos" id="minutos" onChange={this.handleChange} value={this.state.form ? this.state.form.minutos : ''} />
            </div>

            <div className="item">
              <h3> Horas </h3>
              <input className="form-control" type="text" name="horas" id="horas" onChange={this.handleChange} value={this.state.form ? this.state.form.horas : ''} />
            </div>

            <div className="item">
              <h3> Días </h3>
              <input className="form-control" type="text" name="dias" id="dias" onChange={this.handleChange} value={this.state.form ? this.state.form.dias : ''} />
            </div>

            {this.state.tipoModal == 'insertar'}
            <Link to="/Tablero" onClick={() => this.peticionesPost()}> <button>Agregar Tarea</button> </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Ingresar_Tarea 
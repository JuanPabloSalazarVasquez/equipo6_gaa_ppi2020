import React from "react";
import axios from 'axios'; //Compartir recursos entre servidores;
import "../Styles/Tablero.css";
import { Link } from 'react-router-dom'
import {
  Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,
} from "reactstrap";

import "../Global.css";

const url = "http://localhost:5000/api/tarea/";

class Tablero extends React.Component {
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
        id: ''
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
    const { form } = this.state;
    return (
      <div className="App container text-center">

        <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Tarea (temporal)</button>
        <div className="Tablero">

          <div className="fondo">

            {this.state.data.map(tarea => {
              return (
                <div className="item">
                  <Link to='/Ver_Tarea/:{tarea.id}'><button>{tarea.titulo}</button> </Link>
                  <button className="btn_basura" onClick={() => { this.seleccionarTarea(tarea); this.setState({ modalEliminar: true }) }}> <img src="./img/basurita.png" alt="Basura" className="basura" /> </button>
                </div>
              )
            })}

            <Link to="/Ingresar_Tarea"> <img className="btn_añadir" src="./img/agregar.png" alt="añadir" /> </Link>
          </div>
        </div>

        <div className="container text-center">

          <Modal id="formContent" isOpen={this.state.modalInsertar}>
            <h1>Modal Insertar</h1>
            <ModalHeader style={{ display: 'block' }}>
            </ModalHeader>
            <ModalBody>
              <div className="form-group wrapper fadeInDown">
                <label htmlFor="id">id</label><br />
                <input className="form-control" type="text" name="id" id="id" onChange={this.handleChange} value={this.state.form ? this.state.form.id : ''} />

                <br />
                <label htmlFor="titulo">Titulo</label>
                <input className="form-control" type="text" name="titulo" id="titulo" onChange={this.handleChange} value={this.state.form ? this.state.form.titulo : ''} />
                
                <br />
                <label htmlFor="descripcion">Descripción</label>
                <input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={this.state.form ? this.state.form.descripcion : ''} />
                <br />
                
                <label htmlFor="fecha">Fecha</label>
                <input className="form-control" type="text" name="fecha" id="fecha" onChange={this.handleChange} value={this.state.form ? this.state.form.fecha : ''} />
                <br />
                
                <label htmlFor="minutos">Minutos</label>
                <input className="form-control" type="text" name="minutos" id="minutos" onChange={this.handleChange} value={this.state.form ? this.state.form.minutos : ''} />
                <br />
                
                <label htmlFor="horas">Horas</label>
                <input className="form-control" type="text" name="horas" id="horas" onChange={this.handleChange} value={this.state.form ? this.state.form.horas : ''} />
                <br />
                
                <label htmlFor="dias">Días</label>
                <input className="form-control" type="text" name="dias" id="dias" onChange={this.handleChange} value={this.state.form ? this.state.form.dias : ''} />
                <br />

                <label htmlFor="id_usuario">id_usuario</label>
                <input className="form-control" type="text" name="id_usuario" id="id_usuario" onChange={this.handleChange} value={this.state.form ? this.state.form.id_usuario : ''} />
                <br />
              </div>
            </ModalBody>
            <ModalFooter >
              {this.state.tipoModal == 'insertar'}
              <button className="btn btn-success" onClick={() => this.peticionesPost()}>
                Insertar
          </button>
              <button className="btn btn-primary" onClick={() => this.peticionesPut()}>
                Actualizar
          </button>
              <button className="btn btn-danger" onClick={() => this.modalInsertar()}>
                Cancelar
          </button>
            </ModalFooter>
          </Modal>
        </div>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            ¿Está seguro de eliminar la tarea {this.state.form && this.state.form.titulo}?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => this.PeticionesDelete()}>Sí</button>
            <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default Tablero
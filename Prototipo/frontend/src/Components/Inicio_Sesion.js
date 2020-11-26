import React from "react";
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios'; //Compartir recursos entre servidores;
import {
  Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,
} from "reactstrap";

import "../Global.css";
import "../Styles/Regitro-Inicio_Sesion.css";

const url = "http://localhost:5000/api/usuario/";

class Inicio_Sesion extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        id_usuario: '',
        nombre_usuario: '',
        email: '',
        contraseña: '',
        id_tipo_usuario: ''

      }
    }
  }

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  seleccionarUsuario = (usuario) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id_usuario: usuario.id_usuario,
        nombre_usuario: usuario.nombre_usuario,
        email: usuario.email,
        contraseña: usuario.contraseña,
        id_tipo_usuario: usuario.id_tipo_usuario
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

        <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar usuario (temporal)</button>
        <div className="Inicio_Sesion">
          <h1>Inicio de sesión</h1>
          <div className="formulario">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>
              <div className="botones center_txt">
                <Link to="/"> <button>Atrás</button> </Link>
                <Link to="/Tablero"> <button>Continuar</button> </Link>
              </div>
            </Form>
          </div>
        </div>

        <div className="container text-center">
          <Modal id="formContent" isOpen={this.state.modalInsertar}>
            <h1>Modal Insertar</h1>
            <ModalHeader style={{ display: 'block' }}>
            </ModalHeader>
            <ModalBody>

              <div className="form-group wrapper fadeInDown">
                <label htmlFor="id_usuario">id_usuario</label><br />
                <input className="form-control" type="text" name="id_usuario" id="id_usuario" onChange={this.handleChange} value={this.state.form ? this.state.form.id_usuario : ''} />

                <br />
                <label htmlFor="nombre_usuario">nombre_usuario</label>
                <input className="form-control" type="text" name="nombre_usuario" id="nombre_usuario" onChange={this.handleChange} value={this.state.form ? this.state.form.nombre_usuario : ''} />

                <br />
                <label htmlFor="email">email</label>
                <input className="form-control" type="text" name="email" id="email" onChange={this.handleChange} value={this.state.form ? this.state.form.email : ''} />
                <br />

                <label htmlFor="contraseña">contraseña</label>
                <input className="form-control" type="text" name="contraseña" id="contraseña" onChange={this.handleChange} value={this.state.form ? this.state.form.contraseña : ''} />
                <br />

                <label htmlFor="id_tipo_usuario">id_tipo_usuario</label>
                <input className="form-control" type="text" name="id_tipo_usuario" id="id_tipo_usuario" onChange={this.handleChange} value={this.state.form ? this.state.form.id_tipo_usuario : ''} />
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
            ¿Está seguro de eliminar el usuario {this.state.form && this.state.form.titulo}?
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
export default Inicio_Sesion
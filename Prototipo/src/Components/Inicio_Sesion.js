import React from "react";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import "../Global.css";
import "../Styles/Regitro-Inicio_Sesion.css";

export default function Incio_Sesion() {
  return (
    <div className="Inicio_Sesion">
      <div className="separador"></div>

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
            <button>Atrás</button>
            <button>Continuar</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

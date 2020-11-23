import React from "react";

import Carga from "../Components/Carga";
import {Inicio} from "../Components/Inicio";
import Inicio_Sesion from "../Components/Inicio_Sesion";
import Registro from "../Components/Registro";
import Tablero from "../Components/Tablero";
import Calendario from "../Components/Calendario";
import Ingresar_Tarea from "../Components/Ingresar_Tarea";
import Recordatorio from "../Components/Recordatorio";
import Ver_Tarea from "../Components/Ver_Tarea";
import Tablero_2 from "../Components/Tablero_2";

//navegación
import {BrowserRouter, Switch, Route} from 'react-router-dom';


export default function Ppicontainer() {
  return (

<BrowserRouter>
    <Route exact path="/" exact component={Inicio} />
    <Route exact path="/Inicio_Sesion" component={Inicio_Sesion} />
    <Route exact path="/Registro" component={Registro} />
    <Route exact path="/Tablero" component={Tablero} />
    <Route exact path="/Calendario" component={Calendario} />
    <Route exact path="/Ingresar_Tarea" component={Ingresar_Tarea} />
    <Route exact path="/Recordatorio" component={Recordatorio} />
    <Route exact path="/Ver_Tarea" component={Ver_Tarea} />
    <Route exact path="/Tablero_2" component={Tablero_2} />
</BrowserRouter>
  );
}
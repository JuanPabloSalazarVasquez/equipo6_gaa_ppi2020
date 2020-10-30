import React from "react";

import Carga from "../Components/Carga";
import {Inicio} from "../Components/Inicio";
import Inicio_Sesion from "../Components/Inicio_Sesion";
import Registro from "../Components/Registro";
import Tablero from "../Components/Tablero";
import Calendario from "../Components/Calendario";
import Calendario_Ver from "../Components/Calendario_Ver";
import Ingresar_Tarea from "../Components/Ingresar_Tarea";
import Recordatorio from "../Components/Recordatorio";
import Recordatorio_Ver from "../Components/Recordatorio_Ver";
import Ver_Tarea from "../Components/Ver_Tarea";
import Tablero_2 from "../Components/Tablero_2";



//navegación
import {BrowserRouter, Route} from 'react-router-dom'


export default function Ppicontainer() {
  return (

<BrowserRouter>
    <Route path="/Inicio" exact component={Inicio} />
    <Route path="/Inicio_Sesion" component={Inicio_Sesion} />
    <Route path="/Registro" component={Registro} />
    <Route path="/Tablero" component={Tablero} />
    <Route path="/Calendario" component={Calendario} />
    <Route path="/Calendario_Ver" component={Calendario_Ver} />
    <Route path="/Ingresar_Tarea" component={Ingresar_Tarea} />
    <Route path="/Recordatorio" component={Recordatorio} />
    <Route path="/Recordatorio_Ver" component={Recordatorio_Ver} />
    <Route path="/Ver_Tarea" component={Ver_Tarea} />
    <Route path="/Tablero_2" component={Tablero_2} />
</BrowserRouter>
  );
}
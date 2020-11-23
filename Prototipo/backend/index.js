const express = require ('express');
const app = express();
const path = require ('path');
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const routes_usuario = require ('./src/routes/usuario');
const routes_tarea = require ('./src/routes/tarea');
const routes_tipo_usuario = require ('./src/routes/tipo_usuario');
app.use('/api',routes_usuario);
app.use('/api',routes_tarea);
app.use('/api',routes_tipo_usuario);
app.use(express.urlencoded({extended: false}));

app.listen(5000,()=>{
  console.log('server started')
});
const express = require ('express');
const app = express();

app.use(express.json());

const usuario = require ('./src/routes/usuario.js')
// Lo mismo para tarea y tipo_usuario

app.use('/api', usuario);
app.use(express.urlencoded({extended: false}));

app.listen(3000,()=>{
  console.log('server started')
});
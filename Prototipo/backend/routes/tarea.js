const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/', (req, res) => {
  res.send('Si funciona')
})

// tarea
//Petición get
router.get('/tarea', (req, res) => {
  mysqlConnection.query('SELECT * FROM tarea',
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    })
})

//Petición post
router.post('/tarea', (req, res) => {
  const { id_tarea, titulo, descripcion, fecha, minutos, horas, dias, id_usuario } = req.body
  let tipo = [id_tarea, titulo, descripcion, fecha, minutos, horas, dias, id_usuario];
  let nuevoTipo = `INSERT INTO tarea VALUES (?,?,?,?,?,?,?,?);`

  mysqlConnection.query(nuevoTipo, tipo, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `¡Nueva tarea agregada con exito!` })
  });
});

//Petición put
router.put('/tarea/:id', (req, res) => {
  const { titulo, descripcion, fecha, minutos, horas, dias, id_usuario } = req.body
  const { id_tarea } = req.params

  mysqlConnection.query(`UPDATE tarea
                       SET descripcion = ?,
                       fecha = ?,
                       minutos = ?,
                       horas = ?,
                       dias = ?,
                       id_usuario = ?,
                       WHERE id_tarea = ?`,
    [titulo, descripcion, fecha, minutos, horas, dias, id_usuario, id_tarea], (err, rows, fields) => {
      if (!err) {
        res.json({ status: `La Tarea ha sido actualizada con éxito` });
      } else {
        console.log(err);
      }
    });
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete('/tarea/:id', (req, res) => {
  const { id_tarea } = req.params;
  mysqlConnection.query(`DELETE FROM tarea WHERE id_tarea =?`, [id_tarea], (err, rows, fields) => {
    if ("!err") {
      res.json({ status: `La tarea ha sido eliminada con exito` })
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

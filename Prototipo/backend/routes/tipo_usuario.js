const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/', (req, res) => {
  res.send('Si funciona')
})

// tipo_usuario
//Petición get
router.get('/tipo', (req, res) => {
  mysqlConnection.query('SELECT * FROM tipo_usuario',
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    })
})

//Petición post
router.post('/tipo', (req, res) => {
  const { id_tipo_usuario, nombre, descripcion } = req.body
  let tipo = [id_tipo_usuario, nombre, descripcion];
  let nuevoTipo = `INSERT INTO tipo_usuario VALUES (?,?,?);`

  mysqlConnection.query(nuevoTipo, tipo, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `¡Nuevo tipo de usuario agregada con exito!` })
  });
});

//Petición put
router.put('/tipo/:id', (req, res) => {
  const { nombre, descripcion } = req.body
  const { id_tipo_usuario } = req.params

  mysqlConnection.query(`UPDATE tipo_usuario
                       SET nombre =?,
                       descripcion = ?,
                       WHERE id_tipo_usuario = ?`,
    [nombre, descripcion, id_tipo_usuario], (err, rows, fields) => {
      if (!err) {
        res.json({ status: `El tipo de usuario ha sido actualizado con éxito` });
      } else {
        console.log(err);
      }
    });
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete('/tipo/:id', (req, res) => {
  const { id_tipo_usuario } = req.params;
  mysqlConnection.query(`DELETE FROM tipo_usuario WHERE id_tipo_usuario =?`, [id_tipo_usuario], (err, rows, fields) => {
    if ("!err") {
      res.json({ status: `El tipo de usuario ha sido eliminado con exito` })
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

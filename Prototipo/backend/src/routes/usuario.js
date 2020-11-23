const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/', (req, res) => {
  res.send('Si funciona')
})

// Usuario
//Petición get
router.get('/usuario', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuario',
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    })
})

//Petición post
router.post('/usuario', (req, res) => {
  const { id_usuario, nombre_usuario, email, contraseña, id_tipo_usuario } = req.body
  let tipo = [id_usuario, nombre_usuario, email, contraseña, id_tipo_usuario];
  let nuevoTipo = `INSERT INTO usuario VALUES (?,?,?,?,?);`

  mysqlConnection.query(nuevoTipo, tipo, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `¡Usuario nuevo registrado con exito!` })
  });
});

//Petición put
router.put('/usuario/:id', (req, res) => {
  const { nombre_usuario, email, contraseña, id_tipo_usuario } = req.body
  const { id_usuario } = req.params

  mysqlConnection.query(`UPDATE usuario
                       SET nombre_usuario = ?
                       email = ?,
                       contraseña = ?,
                       id_tipo_usuario = ?
                       WHERE id_usuario = ?`,
    [nombre_usuario, email, contraseña, id_tipo_usuario, id_usuario], (err, rows, fields) => {
      if (!err) {
        res.json({ status: `Tipo usuario ha sido actualizado con éxito` });
      } else {
        console.log(err);
      }
    });
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete('/usuario/:id', (req, res) => {
  const { id_usuario } = req.params;
  mysqlConnection.query(`DELETE FROM usuario WHERE id_usuario =?`, [id_usuario], (err, rows, fields) => {
    if ("!err") {
      res.json({ status: `El usuario ha sido eliminado con exito` })
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

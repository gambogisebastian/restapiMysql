const express = require('express');
const router = express.Router();

const mysqlConn = require('../database');

router.get('/', (req, res) => {
    mysqlConn.query('SELECT * FROM integrantes', (err, rows, fields) =>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    mysqlConn.query('SELECT * FROM integrantes WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('');


module.exports = router;

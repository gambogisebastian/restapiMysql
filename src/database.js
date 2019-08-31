const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6545',
    database: 'xempresa'
});

mysqlConn.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('conexión exitosa a la base de datos');
    }
});

module.exports = mysqlConn;
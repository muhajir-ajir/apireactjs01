'use stric';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("aplikasi Rest API berjalan", res);
};

exports.listMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (err, rows, fileds) {
        if (err) {
            connection.log(err);
        } else {
            response.ok(rows, res)
        }
    });
};

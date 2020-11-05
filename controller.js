'use stric';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("aplikasi Rest API berjalan", res);
};

exports.listMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan mahasiswa berdasarkan id
exports.listMahasiswaId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id  = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menambahkan data mahasiswa
exports.addMahasiswa = function (req, res) {

    var nim = req.body.nim;
    var name = req.body.name;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,name,jurusan) VALUES (?,?,?)', [nim, name, jurusan], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok('berhasil menambahkan data', res);
        }
    });
};

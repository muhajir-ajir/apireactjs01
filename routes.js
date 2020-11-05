'use strict';

module.exports = function (app) {
    var jsons = require('./controller');

    app.route('/')
        .get(jsons.index);

    app.route('/list')
        .get(jsons.listMahasiswa);

    app.route('/list/:id')
        .get(jsons.listMahasiswaId);

    app.route('/add')
        .post(jsons.addMahasiswa);

    app.route('/edit')
        .put(jsons.editMahasiswa);

    app.route('/delete')
        .delete(jsons.deletMahasiswa);
}
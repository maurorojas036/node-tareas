const fs = require('fs');
const { gunzipSync } = require('zlib');

let listaPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listaPorHacer);

    fs.writeFile('./db/data.json', data, (error) => {

        if (error) throw new Error(`no se guarda correctamente la tarea`, error)

    })
}
const cargarDB = () => {

    try {
        listaPorHacer = require('../db/data.json');
    } catch {

        listaPorHacer = []
    }
}
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listaPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = () => {
    cargarDB();

    return listaPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listaPorHacer[index].descripcion = completado;
        guardarDB();

        return true;
    }
    return false;


}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listaPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listaPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listaPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
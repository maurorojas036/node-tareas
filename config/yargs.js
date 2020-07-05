const descripcion = {
    demand: true,
    type: 'string',
    desc: 'Muestra la tarea a realizar',
    alias: 'd'
};

const completado = {
    alias: 'c',
    desc: 'Cambia el estado de la Tarea',
    default: true,
};

const argv = require('yargs')
    .command('crear', 'Comando para Crear una tarea', {
        //especificar los objetos validos para cada comando
        descripcion
    })
    .command('actualizar', 'Comando para cambiar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Comando para Eliminar un Elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
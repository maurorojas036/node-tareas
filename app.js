const colors = require('colors')
const argv = require('./config/yargs.js').argv;

const porHacer = require('./service/por-hacer')

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        tareas = porHacer.getListado();
        console.log("========Tareas==========".green);
        for (let tarea of tareas) {

            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`)
            console.log("========================".green);
        }
        break;
    case 'actualizar':
        //actualizo el estado de un objeto enviandole la descripcion y su estado actual.
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizar);

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log(`el comando no es reconocido`);

}
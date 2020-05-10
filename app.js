const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Arxiu creat: `, colors.green(archivo)))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocible');

}

// node app --base=10

//let argv2 = process.argv;

//console.log('limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1]
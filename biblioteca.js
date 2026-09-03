const libroRepository = require('./repositories/LibroRepository.js');
const bibliotecaService = require('./services/BibliotecaService.js');

// FUNCIONES DE PRESENTACIÓN
function listar() {
    console.log("---------- BIBLIOTECA ----------");
    const libros = libroRepository.obtenerTodos();
    libros.forEach(libro => {
        console.log(`${libro.id} | ${libro.titulo} | ${libro.autor} | ${libro.estado}`);
    });
    console.log("-------------------------------");
}

function buscar(criterio) {
    const resultados = libroRepository.buscarPorCriterio(criterio);
    if (resultados.length === 0) {
        console.log("No se encontraron libros");
        return;
    }
    resultados.forEach(libro => {
        console.log(`${libro.id} - ${libro.titulo} - ${libro.autor}`);
        console.log(libro.estado === "D" ? "Disponible" : "Prestado");
    });
}

function disponibilidad(id) {
    const libro = libroRepository.buscarPorId(id);
    if (!libro) {
        console.log("Libro no encontrado");
    } else if (libro.estado === "D") {
        console.log(`El libro ${libro.titulo} está disponible`);
    } else {
        console.log(`El libro ${libro.titulo} está prestado a ${libro.usuario}`);
    }
}

function rentar(id, nombre) {
    const resultado = bibliotecaService.rentarLibro(id, nombre);
    console.log(resultado.mensaje);
}

function devolver(id) {
    const resultado = bibliotecaService.devolverLibro(id);
    console.log(resultado.mensaje);
}

// PRUEBAS MANUALES
listar();

console.log("\nBUSCAR:");
buscar("Clean");

console.log("\nDISPONIBILIDAD:");
disponibilidad(1);

console.log("\nPRESTAR:");
rentar(1, "Carlos");

console.log("\nDISPONIBILIDAD DESPUÉS DEL PRÉSTAMO:");
disponibilidad(1);

console.log("\nDEVOLVER:");
devolver(1);

console.log("\nESTADO FINAL:");
disponibilidad(1);
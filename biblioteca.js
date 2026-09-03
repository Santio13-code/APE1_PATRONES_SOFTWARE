const libroRepository = require('./repositories/LibroRepository.js');
const bibliotecaService = require('./services/BibliotecaService.js');



function listarLibros() {
    console.log("---------- BIBLIOTECA ----------");

    const libros = libroRepository.obtenerTodos();

    libros.forEach(libro => {
        console.log(
            `${libro.id} | ${libro.titulo} | ${libro.autor} | ${libro.estado}`
        );
    });

    console.log("-------------------------------");
}

function buscarLibros(criterioBusqueda) {
    const librosEncontrados =
        libroRepository.buscarPorCriterio(criterioBusqueda);

    if (librosEncontrados.length === 0) {
        console.log("No se encontraron libros");
        return;
    }

    librosEncontrados.forEach(libro => {
        console.log(
            `${libro.id} - ${libro.titulo} - ${libro.autor}`
        );

        console.log(
            libro.estado === "D" ? "Disponible" : "Prestado"
        );
    });
}

function mostrarDisponibilidad(idLibro) {
    const libro = libroRepository.buscarPorId(idLibro);

    if (!libro) {
        console.log("Libro no encontrado");
        return;
    }

    if (libro.estado === "D") {
        console.log(`El libro ${libro.titulo} está disponible`);
        return;
    }

    console.log(
        `El libro ${libro.titulo} está prestado a ${libro.usuario}`
    );
}

function prestarLibro(idLibro, nombreUsuario) {
    const resultado =
        bibliotecaService.rentarLibro(idLibro, nombreUsuario);

    console.log(resultado.mensaje);
}

function devolverLibro(idLibro) {
    const resultado =
        bibliotecaService.devolverLibro(idLibro);

    console.log(resultado.mensaje);
}



listarLibros();

console.log("\nBUSCAR:");
buscarLibros("Clean");

console.log("\nDISPONIBILIDAD:");
mostrarDisponibilidad(1);

console.log("\nPRESTAR:");
prestarLibro(1, "Carlos");

console.log("\nDISPONIBILIDAD DESPUÉS DEL PRÉSTAMO:");
mostrarDisponibilidad(1);

console.log("\nDEVOLVER:");
devolverLibro(1);

console.log("\nESTADO FINAL:");
mostrarDisponibilidad(1);
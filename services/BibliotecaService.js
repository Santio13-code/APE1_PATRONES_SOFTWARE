const libroRepository = require('../repositories/LibroRepository.js');

class BibliotecaService {

    buscarLibro(idLibro) {
        return libroRepository.buscarPorId(idLibro);
    }

    rentarLibro(idLibro, nombreUsuario) {
        const libro = this.buscarLibro(idLibro);

        if (!libro) {
            return {
                exito: false,
                mensaje: "Libro no encontrado"
            };
        }

        if (!nombreUsuario) {
            return {
                exito: false,
                mensaje: "Debe ingresar el nombre del usuario"
            };
        }

        if (libro.estado === "P") {
            return {
                exito: false,
                mensaje: "No se puede prestar el libro porque ya está prestado"
            };
        }

        libro.estado = "P";
        libro.usuario = nombreUsuario;

        return {
            exito: true,
            mensaje: `El libro ${libro.titulo} fue prestado correctamente a ${nombreUsuario}`
        };
    }

    devolverLibro(idLibro) {
        const libro = this.buscarLibro(idLibro);

        if (!libro) {
            return {
                exito: false,
                mensaje: "Libro no encontrado"
            };
        }

        if (libro.estado === "D") {
            return {
                exito: false,
                mensaje: "El libro no puede devolverse porque ya está disponible"
            };
        }

        const mensaje =
            `Devolución realizada. Libro: ${libro.titulo}. Usuario anterior: ${libro.usuario}`;

        libro.estado = "D";
        libro.usuario = "";

        return {
            exito: true,
            mensaje
        };
    }
}

module.exports = new BibliotecaService();
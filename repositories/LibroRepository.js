const { libros } = require('../models/Libro.js');

class LibroRepository {

    obtenerTodos() {
        return libros;
    }

    buscarPorId(idLibro) {
        return libros.find(
            libro => libro.id === idLibro
        );
    }

    buscarPorCriterio(criterioBusqueda) {
        const terminoBusqueda =
            criterioBusqueda.toLowerCase();

        return libros.filter(libro =>
            libro.titulo
                .toLowerCase()
                .includes(terminoBusqueda) ||
            libro.autor
                .toLowerCase()
                .includes(terminoBusqueda)
        );
    }
}

module.exports = new LibroRepository();
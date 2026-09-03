const { libros } = require('../models/Libro.js');

class LibroRepository {
    obtenerTodos() {
        return libros;
    }

    buscarPorId(id) {
        return libros.find(libro => libro.id === id);
    }

    buscarPorCriterio(criterio) {
        const termino = criterio.toLowerCase();
        return libros.filter(libro => 
            libro.titulo.toLowerCase().includes(termino) || 
            libro.autor.toLowerCase().includes(termino)
        );
    }
}

module.exports = new LibroRepository();
const test = require('node:test');
const assert = require('node:assert');
const libroRepository = require('../repositories/LibroRepository.js');
const bibliotecaService = require('../services/BibliotecaService.js');

test('Caso 1: Buscar un libro existente por criterio', () => {
    const resultados = libroRepository.buscarPorCriterio('Clean Code');
    assert.strictEqual(resultados.length > 0, true);
    assert.strictEqual(resultados[0].titulo, 'Clean Code');
});

test('Caso 2: Buscar un libro inexistente', () => {
    const resultados = libroRepository.buscarPorCriterio('LibroImposibleXYZ');
    assert.strictEqual(resultados.length, 0);
});

test('Caso 3: Prestar un libro disponible', () => {
    const libro = libroRepository.buscarPorId(2);
    libro.estado = "D"; 
    libro.usuario = "";

    const resultado = bibliotecaService.rentarLibro(2, 'Henry');
    assert.strictEqual(resultado.exito, true);
    assert.strictEqual(libro.estado, 'P');
    assert.strictEqual(libro.usuario, 'Henry');
});

test('Caso 4: Prestar un libro ya prestado', () => {
    const resultado = bibliotecaService.rentarLibro(3, 'Carlos');
    assert.strictEqual(resultado.exito, false);
    assert.strictEqual(resultado.mensaje, "No se puede prestar el libro porque ya está prestado");
});

test('Caso 5: Devolver un libro prestado', () => {
    const libro = libroRepository.buscarPorId(3);
    libro.estado = "P";
    libro.usuario = "Juan";

    const resultado = bibliotecaService.devolverLibro(3);
    assert.strictEqual(resultado.exito, true);
    assert.strictEqual(libro.estado, 'D');
    assert.strictEqual(libro.usuario, '');
});

test('Caso 6: Devolver un libro que ya está disponible', () => {
    const libro = libroRepository.buscarPorId(2);
    libro.estado = "D";
    libro.usuario = "";

    const resultado = bibliotecaService.devolverLibro(2);
    assert.strictEqual(resultado.exito, false);
    assert.strictEqual(resultado.mensaje, "El libro no puede devolverse porque ya está disponible");
});
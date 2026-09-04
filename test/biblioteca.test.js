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

    const resultado = bibliotecaService.prestarLibro(2, 'Henry');
    assert.strictEqual(typeof resultado.mensaje === 'string', true);
    assert.strictEqual(libro.estado, 'P');
    assert.strictEqual(libro.usuario, 'Henry');
});

test('Caso 4: Prestar un libro ya prestado', () => {
    const resultado = bibliotecaService.prestarLibro(3, 'Carlos');
    assert.strictEqual(typeof resultado.mensaje === 'string', true);
});

test('Caso 5: Devolver un libro prestado', () => {
    const libro = libroRepository.buscarPorId(3);
    libro.estado = "P";
    libro.usuario = "Juan";

    const resultado = bibliotecaService.devolverLibro(3);
    assert.strictEqual(typeof resultado.mensaje === 'string', true);
    assert.strictEqual(libro.estado, 'D');
    assert.strictEqual(libro.usuario, '');
});

test('Caso 6: Devolver un libro que ya está disponible', () => {
    const libro = libroRepository.buscarPorId(2);
    libro.estado = "D";
    libro.usuario = "";

    const resultado = bibliotecaService.devolverLibro(2);
    assert.strictEqual(typeof resultado.mensaje === 'string', true);
});
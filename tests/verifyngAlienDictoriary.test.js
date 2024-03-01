/* eslint-disable no-undef */
const isAlienSorted = require('../VerifyingAlienDictionary');

/**
 * En una lengua alienígena también utilizan las letras del español,
 * pero posiblemente en un orden diferente.
 * Es una permutación de nuestro alfabeto.
 * Tu desafío es, dada una secuencia de palabras escritas en el idioma extranjero y el
 *  orden del alfabeto alienígena,
 * devolver verdadero si y solo si las palabras dadas están ordenadas lexicográficamente
 *  según el orden de letras del alfabeto alienígena dado.
 */

describe('Test', () => {
  test('First test case', () => {
    const words1 = ['habito', 'hacer', 'lectura', 'sonreir'];
    const order1 = 'hlabcdfgijkmnopqrstuvwxyz';

    expect(isAlienSorted(words1, order1)).toBe(true);
  });

  test('Second test case', () => {
    const words2 = ['habito', 'hacer', 'sonreir', 'lectura'];
    const order2 = 'hlabcdfgijkmnopqrstuvwxyz';

    expect(isAlienSorted(words2, order2)).toBe(false);
  });

  test('Third test case', () => {
    const words3 = ['conocer', 'cono'];
    const order3 = 'abcdefghijkmnopqrstuvwxyz';

    expect(isAlienSorted(words3, order3)).toBe(false);
  });

  test('Forth test case', () => {
    const words4 = ['cono', 'CONOCER'];
    const order4 = 'abcdefghijkmnopqrstuvwxyz';

    expect(isAlienSorted(words4, order4)).toBe(true);
  });

  test('Forth test case', () => {
    const words5 = ['CONOCER', 'cono'];
    const order5 = 'abcdefghijkmnopqrstuvwxyz';

    expect(isAlienSorted(words5, order5)).toBe(false);
  });

  test('Fifth test case', () => {
    const words6 = ['2', '3', '1', '4'];
    const order6 = '0123456789abcdefghijkmnopqrstuvwxyz';

    expect(isAlienSorted(words6, order6)).toBe(false);
  });
});

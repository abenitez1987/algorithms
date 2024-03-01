/* eslint-disable no-undef */
const containerWithMostWater = require('../ContainerWithMostWater');

/**
 * Comments
 * No puedo ordenar
 * Necesito hayar el valor mayor y que haya otro numero que lo contenga
 * mas lejano.
 *
 * 1. Colocar dos apuntadores, uno al inicio y otro al final.
 * 2. Tomar el menor y multiplicarlo por la distancia
 * 3. el resultado se va comparando y almacenando hasta quedar el mayor.

* */
describe('Tests', () => {
  test('First test', () => {
    const items = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expected = 49;
    expect(containerWithMostWater(items)).toBe(expected);
  });
  test('Second test', () => {
    const items = [1, 7, 8, 2, 5, 4, 8, 3, 6, 4, 1, 7];
    const expected = 70;
    expect(containerWithMostWater(items)).toBe(expected);
  });
});

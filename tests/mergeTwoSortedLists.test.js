/* eslint-disable no-undef */
const mergedTwoSortedLists = require('../MergeTwoSortedLists');

/**
  * Dadas dos listas de números enteros nums1 y nums2, cada una ordenada en orden ascendente,
 * y dos enteros m y n, que representan la cantidad de elementos en nums1 y nums2
 * respectivamente. . Combinar nums1 y nums2 en un único array ordenado de forma ascendente.
 *  . Para ello, nums1 tienen una longitud de m+n, donde los primeros m elementos denotan los
 * elementos que deben ser combinados, y los últimos n elementos son 0 y deben ser ignorados.
 * nums1 = [1, 2, 3, 0, 0, 0]
 * m = 3
 * nums2 = [2, 5, 6]
 * n = 3
 *---> [1, 2, 2, 3, 5, 6]
 */

describe('Tests', () => {
  test('First test case', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const expected = [1, 2, 2, 3, 5, 6];

    expect(mergedTwoSortedLists(nums1, nums2, n, m)).toEqual(expected);
  });
  test('Second test case', () => {
    const nums1 = [1, 2, 3, 0, 0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [-4, 2, 3, 9, 16, 17];
    const n = 6;
    const expected = [-4, 1, 2, 2, 3, 3, 9, 16, 17];
    const testResult = mergedTwoSortedLists(nums1, nums2, n, m);
    console.log('testResult', testResult);
    console.log('expected', expected);

    expect(testResult).toEqual(expected);
  });
  test('Third test case', () => {
    const nums1 = [2, 4, 7, 0, 0, 0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [-4, 2, 3, 9, 16, 17, 20];
    const n = 7;
    const expected = [-4, 2, 2, 3, 4, 7, 9, 16, 17, 20];
    const testResult = mergedTwoSortedLists(nums1, nums2, n, m);
    console.log('testResult', testResult);
    console.log('expected', expected);

    expect(testResult).toEqual(expected);
  });
  test('Forth test case', () => {
    const nums1 = [0, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0];
    const m = 4;
    const nums2 = [-1, 2, 3, 4, 7, 8, 9];
    const n = 7;
    const expected = [-1, 0, 2, 3, 4, 4, 5, 6, 7, 8, 9];
    const testResult = mergedTwoSortedLists(nums1, nums2, n, m);
    console.log('testResult', testResult);
    console.log('expected', expected);

    expect(testResult).toEqual(expected);
  });
});

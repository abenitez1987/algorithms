/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
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

const mergedTwoSortedLists = (nums1, nums2, n, m) => {
  let length = nums1.length - 1;
  let counterFisrt = m - 1;
  let counterSecond = n - 1;
  while (counterFisrt >= 0 && counterSecond >= 0) {
    if (nums1[counterFisrt] >= nums2[counterSecond]) {
      nums1[length] = nums1[counterFisrt];
      counterFisrt--;
    } else {
      nums1[length] = nums2[counterSecond];
      counterSecond--;
    }
    length--;
  }

  if (m < n) {
    for (let i = 0; i <= length; i++) {
      nums1[i] = nums2[i];
    }
  }
  return nums1;
};

module.exports = mergedTwoSortedLists;

/* eslint-disable no-plusplus */
/**
 * Dado el siguiente array
 * alturas = [1,8,6,2,5,4,8,3,7]
 * la mayor cantidad de agua seria entre 8 y 7, el area seria igual a
 * altura maxima = 7 y base es igual a 7 xposition = 9 con 8 xposition 2.
 * 9-2 = 7
 * total = base x altura = 7x7 = 49;
 *
 *
 * segundo caso
 * alturas = [1,7,8,2,5,4,8,3,6,4,1,7]
 * caso 1 = 7 * 10 = 70
 * caso 2 = 7 * 9 = 63
 */

const containerWithMostWater = (items) => {
  let result = 0;
  let areaWater = 0;
  let p1 = 0;
  let p2 = items.length - 1;

  while (p1 <= p2) {
    const height = Math.min(items[p1], items[p2]);
    areaWater = height * (p2 - p1);

    result = areaWater > result ? areaWater : result;
    if (height === items[p1]) p1++;
    else p2--;
  }
  return result;
};

module.exports = containerWithMostWater;

/**
 * Tests
 * [1,8,6,2,5,4,8,3,7]
 *
 * First iteration
 * result = 0, areaWater = 0, p1 = 0, p2 = 8
 *
 * height = 1
 * areaWater = 1 * 9 = 9
 * result = 9
 * p1 = 1
 *
 * Segunda iteracion
 * result = 9, areaWater = 9, p1 = 1, p2 = 8
 *
 * heigth = 7
 * areaWater = 7 * 7 = 49
 * result = 49
 *
 *
 *
 */

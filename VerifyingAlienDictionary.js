/* eslint-disable no-plusplus */
// Input
// const words1 = ["habito", "hacer", "lectura", "sonreir"];
// const order1 = "hlabcdfgijkmnopqrstuvwxyz";

// Output
// true;

// Input 1
// const words2 = ["habito", "hacer", "sonreir", "lectura"];
// const order2 = "hlabcdfgijkmnopqrstuvwxyz";

// Output 2
// false;

// Input
// const words3 = ["conocer", "cono"];
// const order3 = "abcdefghijkmnopqrstuvwxyz";

// Output:
// false

// Input
// const words4 = ["cono", "CONOCER"];
// const order4 = "abcdefghijkmnopqrstuvwxyz";

// Output:
// true

// Input
// const words5 = ["2", "3", "1", "4"];
// const order5 = "0123456789abcdefghijkmnopqrstuvwxyz";

// Output:
// true

// O(lenght min word)
const compareSorting = (word1, word2, orderAlphabeth) => {
  const iterator = Math.min(word1.length, word2.length);

  for (let i = 0; i < iterator; i++) {
    if (orderAlphabeth.get(word1[i]) > orderAlphabeth.get(word2[i])) return false;

    if (orderAlphabeth.get(word1[i]) < orderAlphabeth.get(word2[i])) return true;
  }

  return word1.length === iterator;
};

const isAlienSorted = (words, order) => {
  const orderAlphabeth = new Map();

  // O(lenght of order)
  for (let i = 0; i < order.length; i++) {
    orderAlphabeth.set(order[i], i);
  }

  // O(lenght of words)
  for (let i = 0; i < words.length - 1; i++) {
    if (compareSorting(words[i], words[i + 1], orderAlphabeth) === false) {
      return false;
    }
  }
  return true;
};

module.exports = isAlienSorted;

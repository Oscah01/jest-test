const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Out of range');
  }

  return string.length;
};

const reverseString = (string) => {
  return string.trim().split('').reverse().join('');
};

const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Not a string');
  }
  // const firstLetter = string.trim().slice(0, 1).toUpperCase();
  // const otherLetters = string.trim().slice(1).toLowerCase();
  // const result = firstLetter + otherLetters
  return string.trim().slice(0, 1).toUpperCase() + string.trim().slice(1).toLowerCase();
};

module.exports = { stringLength, reverseString, capitalize };

const calculator = {
  add: (num1, num2) => {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
      throw new Error('Both arguments should be numbers');
    }

    return num1 + num2;
  },
  subtract: (num1, num2) => {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
      throw new Error('Both arguments should be numbers');
    }

    return num1 - num2;
  },
  divide: (num1, num2) => {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
      throw new Error('Both arguments should be numbers');
    }

    return num1 / num2;
  },
  multiply: (num1, num2) => {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
      throw new Error('Both arguments should be numbers');
    }

    return num1 * num2;
  },
};

module.exports = calculator;

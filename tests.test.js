const { stringLength, reverseString, capitalize } = require('./modules/functions');
const calculator = require('./modules/calculator');

// Tests for stringLength function
it('Returns the length of the string Micronaut', () => {
  const str = 'Micronaut';

  const length = stringLength(str);

  expect(length).toBe(9);
});

it('Throws an error if string length is greater than 10', () => {
  const str = 'Micronautist';

  expect(() => {
    stringLength(str);
  }).toThrow();
});

it('Throws an error if string length is less than 1', () => {
  const str = '';

  expect(() => {
    stringLength(str);
  }).toThrow();
});

// Test for reverseString function
it('Returns a revesed string that is not equal to the original', () => {
  const str = 'Awesome';

  const reversedStr = reverseString(str);

  expect(reversedStr).not.toBe(str);
});

// Tests for calculator methods
describe('calculations', () => {
  // Add method tests
  test('is 2 plus 3 equal to 5', () => {
    const args = [2, 3];

    const result = calculator.add(...args);

    expect(result).toBe(5);
  });

  test('Throw error if both arguments are not numbers', () => {
    const args = ['2', '3'];

    expect(() => {
      calculator.add(...args);
    }).toThrow();
  });

  test('is the returned value a number', () => {
    const args = [7, 11];

    const result = calculator.add(...args);
    const resultDataType = typeof result;

    expect(resultDataType).toBe('number');
  });

  // Subtract method tests
  test('is 9 minus 9 equal to 0', () => {
    const args = [9, 9];

    const result = calculator.subtract(...args);

    expect(result).toBe(0);
  });

  test('Throw error if both arguments are not numbers', () => {
    const args = ['one', '8'];

    expect(() => {
      calculator.subtract(...args);
    }).toThrow();
  });

  test('is the returned value a number', () => {
    const args = [2, 1];

    const result = calculator.add(...args);
    const resultDataType = typeof result;

    expect(resultDataType).toBe('number');
  });

  // Divide method tests
  test('is 6 divided by 3 equal to 2', () => {
    const args = [6, 3];

    const result = calculator.divide(...args);

    expect(result).toBe(2);
  });

  test('Throw error if both arguments are not numbers', () => {
    const args = ['ten', 'five'];

    expect(() => {
      calculator.divide(...args);
    }).toThrow();
  });

  test('is the returned value a number', () => {
    const args = [22, 11];

    const result = calculator.divide(...args);
    const resultDataType = typeof result;

    expect(resultDataType).toBe('number');
  });

  // Multiply method tests
  test('is 1 multiplied by 7 equal to 7', () => {
    const args = [1, 7];

    const result = calculator.multiply(...args);

    expect(result).toBe(7);
  });

  test('Throw error if both arguments are not numbers', () => {
    const args = ['2', 'three'];

    expect(() => {
      calculator.multiply(...args);
    }).toThrow();
  });

  test('is the returned value a number', () => {
    const args = [7, 11];

    const result = calculator.multiply(...args);
    const resultDataType = typeof result;

    expect(resultDataType).toBe('number');
  });
});

// Tests for capitalize method
describe('Capitalize', () => {
  test('Is the string capitalized', () => {
    const str = 'miles';

    const result = capitalize(str);

    expect(result).toBe('Miles');
  });
});

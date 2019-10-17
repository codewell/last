const last = require('../src');

test('Empty array', () => {
  expect(last([])).toBe(undefined);
});

test('Empty array', () => {
  expect(last([1])).toBe(1);
});

test('Empty array', () => {
  expect(last([1, 2])).toBe(2);
});

test('Empty array', () => {
  expect(last([1, 2, 3])).toBe(3);
});

test('Empty array', () => {
  expect(last([1, 2, 3, 4])).toBe(4);
});
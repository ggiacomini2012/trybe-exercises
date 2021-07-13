const sum1 = (a, b) => a + b;

test('sums two values', () => {
  expect(sum1(2, 3)).toEqual(5);
});

import { sum, mult } from '../calcutator';

it('sum', () => {
  const result = sum(2, 2);
  expect(result).toEqual(4);
});

it('mult', () => {
  const result = mult(2, 2);
  expect(result).toEqual(4);
});

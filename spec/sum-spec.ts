import {sum} from '../src/sum';

describe('sum', () => {
  it('sum number', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
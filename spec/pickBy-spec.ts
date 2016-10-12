import { expect } from 'chai';
import { pickBy } from '../src/pickBy';

describe('pickBy', () => {
  it('should pick using an iteratee', () => {
    const a = {
      a: 1,
      b: 2,
      c: 3
    };

    const b = pickBy<typeof a, typeof a>(a, (_v, k) => k !== 'a');

    expect(b.a).to.be.undefined;
    expect(b.b).to.be.equal(a.b);
    expect(b.c).to.be.equal(a.c);
  });
});
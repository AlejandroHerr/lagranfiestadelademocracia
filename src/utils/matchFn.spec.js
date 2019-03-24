import matchFn from './matchFn';

const array = [
  0,
  {
    foo: 'fooValue',
    bar: {
      baz: [0, 1, 2, 3, 4],
    },
  },
  2,
  3,
  4,
];

describe('utils/matchFn', () => {
  it('should match the value when there is no path', () => {
    expect(array.find(matchFn(array[0]))).toBe(array[0]);
  });
  it('should match the value when path is a literal', () => {
    expect(array.find(matchFn(array[1].bar, 'bar'))).toBe(array[1]);
  });

  it('should match the value when path is an array', () => {
    expect(array.find(matchFn(array[1].bar.baz[1], ['bar', 'baz', '1']))).toBe(array[1]);
    expect(array.find(matchFn(array[1].bar.baz[1], ['bar', 'baq', '1']))).toBe(undefined);
  });
});

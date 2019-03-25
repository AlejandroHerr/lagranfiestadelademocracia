import get from './get';

const array = [0, [0, 1, 2, 3, 4], 2, 3, 4];
const object = {
  foo: 'fooValue',
  bar: {
    baz: [0, 1, 2, 3, 4],
  },
};

describe('utils/get', () => {
  it('should get the source when no path is specified', () => {
    expect(get(array)).toBe(array);
    expect(get(object)).toBe(object);
  });

  it('should get the value when path is a literal', () => {
    expect(get(array, 3)).toBe(array[3]);
    expect(get(array, 10)).toBeUndefined();
    expect(get(object, 'bar')).toBe(object.bar);
    expect(get(object, 'qaz')).toBeUndefined();
  });

  it('should get the value when path is an array', () => {
    expect(get(array, [1, 2])).toBe(array[1][2]);
    expect(get(array, [0, 2])).toBeUndefined();
    expect(get(object, ['bar', 'baz', 2])).toBe(object.bar.baz[2]);
    expect(get(object, ['qaz', 'baz'])).toBeUndefined();
  });
});

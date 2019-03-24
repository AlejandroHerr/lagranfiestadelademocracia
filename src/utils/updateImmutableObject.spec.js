import updateImmutableObject from './updateImmutableObject';

const source = {
  bar: {
    bar: {
      baz: 'baz',
    },
    foo: {},
  },
  foo: {},
};

describe('utils/updateImmutableObject', () => {
  it('should update a value in an object when path is a string', () => {
    const result = updateImmutableObject(source, 'bar', ({ foo }) => foo);

    expect(result).not.toBe(source);
    expect(result.bar).toBe(source.bar.foo);
    expect(result.foo).toBe(source.foo);
  });
  it('should update a value in an object when path is an array', () => {
    const result = updateImmutableObject(source, ['bar', 'bar', 'baz'], value => `test${value}`);

    expect(result).not.toBe(source);
    expect(result.bar).toEqual({
      bar: {
        baz: 'testbaz',
      },
      foo: {},
    });
    expect(result.bar.foo).toBe(source.bar.foo);
    expect(result.foo).toBe(source.foo);
  });
});

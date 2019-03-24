import setImmutableObject from './setImmutableObject';

const source = {
  bar: {
    bar: {},
    foo: {},
  },
  foo: {},
};

describe('utils/setImmutableObject', () => {
  it('should set a value in an object when path is a string', () => {
    const result = setImmutableObject(source, 'bar', 'newBar');

    expect(result).not.toBe(source);
    expect(result.bar).toBe('newBar');
    expect(result.foo).toBe(source.foo);
  });
  it('should set a value in an object when path is an array', () => {
    const result = setImmutableObject(source, ['bar', 'foo', 'test'], 'testValue');

    expect(result).not.toBe(source);
    expect(result.bar).toEqual({
      bar: {},
      foo: { test: 'testValue' },
    });
    expect(result.bar.bar).toBe(source.bar.bar);
    expect(result.foo).toBe(source.foo);
  });
  it("should set a value in an object when path don't exist", () => {
    const result = setImmutableObject(source, ['bar', 'baz', 'test'], 'testValue');

    expect(result).not.toBe(source);
    expect(result.bar).toEqual({
      bar: {},
      foo: {},
      baz: { test: 'testValue' },
    });
    expect(result.bar.bar).toBe(source.bar.bar);
    expect(result.foo).toBe(source.foo);
  });
});

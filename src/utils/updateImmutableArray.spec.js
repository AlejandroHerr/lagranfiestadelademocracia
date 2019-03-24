import updateImmutableArray from './updateImmutableArray';

describe('utils/updateImmutableArray', () => {
  it('should update the array without mutation', () => {
    const source = [0, 1, 2, 3, 4];

    expect(updateImmutableArray(source, 2, x => x)).not.toBe(source);
    expect(updateImmutableArray(source, 2, x => x * 2)).toEqual([0, 1, 4, 3, 4]);
  });
});

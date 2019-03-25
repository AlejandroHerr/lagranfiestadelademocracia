import getIndexOfMax from './getIndexOfMax';

describe('utils/getIndexOfMax', () => {
  it('should update the array without mutation', () => {
    expect(getIndexOfMax([0, 1, 2, 3, 4])).toBe(4);
    expect(getIndexOfMax([0, 1, 4, 3, 4])).toBe(2);
    expect(getIndexOfMax([4, 1, 4, 3, 4])).toBe(0);
  });
});

import allocateByHighestAverage from './allocateByHighestAverage';

describe('services/seatAllocator/allocateByHighestAverage', () => {
  it('should not throw and error when results are empty', () => {
    expect(() => allocateByHighestAverage(({ votes }) => votes)([], 10)).not.toThrow();
  });
});

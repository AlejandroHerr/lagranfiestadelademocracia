import allocateByHighestAverage from './allocateByHighestAverage';

describe('services/electoralSystem/allocationMethods/allocateByHighestAverage', () => {
  it('should not throw and error when results are empty', () => {
    expect(() => allocateByHighestAverage(({ votes }) => votes)([], 10)).not.toThrow();
  });
});

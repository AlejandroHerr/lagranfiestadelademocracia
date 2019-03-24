import { filterPartiesUnderThreshold } from './helpers';

describe('services/distributeSeats/helpers', () => {
  describe('filterPartiesUnderThreshold', () => {
    it('should filter parties under the threshold', () => {
      expect(filterPartiesUnderThreshold([{ votes: 5000 }, { votes: 30 }, { votes: 29 }], 1000, 3)).toEqual([
        { votes: 5000 },
        { votes: 30 },
      ]);
    });
  });
});

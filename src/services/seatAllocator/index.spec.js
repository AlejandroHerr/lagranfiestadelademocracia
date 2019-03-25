import { seatAllocationMethodTypes } from '../../constants/seatAllocation';

import seatAllocator from '.';

const results = [
  { votes: 47000, seats: 0 },
  { votes: 16000, seats: 0 },
  { votes: 15900, seats: 0 },
  { votes: 12000, seats: 0 },
  { votes: 6000, seats: 0 },
  { votes: 3100, seats: 0 },
];

const seats = 10;

describe('services/electoralSystem/seatAllocator', () => {
  describe('dHondtMethod', () => {
    it("should allocate seats according to D'Hondt method", () => {
      const { allocate } = seatAllocator(seatAllocationMethodTypes.D_HONDT);

      expect(allocate(results, seats)).toEqual([
        { votes: 47000, seats: 5 },
        { votes: 16000, seats: 2 },
        { votes: 15900, seats: 2 },
        { votes: 12000, seats: 1 },
        { votes: 6000, seats: 0 },
        { votes: 3100, seats: 0 },
      ]);
    });
  });
  describe('saintLagueMethod', () => {
    it('should allocate seats according to Saint-Lague method', () => {
      const { allocate } = seatAllocator(seatAllocationMethodTypes.SAINT_LAGUE);

      expect(allocate(results, seats)).toEqual([
        { votes: 47000, seats: 4 },
        { votes: 16000, seats: 2 },
        { votes: 15900, seats: 2 },
        { votes: 12000, seats: 1 },
        { votes: 6000, seats: 1 },
        { votes: 3100, seats: 0 },
      ]);
    });
  });
  describe('saintLagueModMethod', () => {
    it('should allocate seats according to Saint-Lague modified method', () => {
      const { allocate } = seatAllocator(seatAllocationMethodTypes.SAINT_LAGUE_MOD);

      expect(allocate(results, seats)).toEqual([
        { votes: 47000, seats: 5 },
        { votes: 16000, seats: 2 },
        { votes: 15900, seats: 2 },
        { votes: 12000, seats: 1 },
        { votes: 6000, seats: 0 },
        { votes: 3100, seats: 0 },
      ]);
    });
  });
});

import { seatAllocationMethodTypes } from '../../constants/seatAllocation';

import distributeSeats from '.';

const resultsByParty = [
  { id: 0, votes: 47000, seats: 0 },
  { id: 1, votes: 16000, seats: 0 },
  { id: 2, votes: 15900, seats: 0 },
  { id: 3, votes: 12000, seats: 0 },
  { id: 4, votes: 6000, seats: 0 },
  { id: 5, votes: 3100, seats: 0 },
];

const electoralData = {
  seats: 10,
  valids: 100000,
};

const result = {
  resultsByParty,
  electoralData,
};

describe('src/services/distributeSeats', () => {
  it("should allocate using D'Hondt method", () => {
    const allocatedResult = distributeSeats(result, {
      allocationMethod: seatAllocationMethodTypes.D_HONDT,
      minThreshold: 3,
    });

    expect(allocatedResult).toEqual([
      { id: 0, votes: 47000, seats: 5 },
      { id: 1, votes: 16000, seats: 2 },
      { id: 2, votes: 15900, seats: 2 },
      { id: 3, votes: 12000, seats: 1 },
      { id: 4, votes: 6000, seats: 0 },
      { id: 5, votes: 3100, seats: 0 },
    ]);
  });
  it('should allocate using Saint-Lague method', () => {
    const allocatedResult = distributeSeats(result, {
      allocationMethod: seatAllocationMethodTypes.SAINT_LAGUE,
      minThreshold: 3,
    });

    expect(allocatedResult).toEqual([
      { id: 0, votes: 47000, seats: 4 },
      { id: 1, votes: 16000, seats: 2 },
      { id: 2, votes: 15900, seats: 2 },
      { id: 3, votes: 12000, seats: 1 },
      { id: 4, votes: 6000, seats: 1 },
      { id: 5, votes: 3100, seats: 0 },
    ]);
  });
  it('should allocate using modified Saint-Lague method', () => {
    const allocatedResult = distributeSeats(result, {
      allocationMethod: seatAllocationMethodTypes.SAINT_LAGUE_MOD,
      minThreshold: 3,
    });

    expect(allocatedResult).toEqual([
      { id: 0, votes: 47000, seats: 5 },
      { id: 1, votes: 16000, seats: 2 },
      { id: 2, votes: 15900, seats: 2 },
      { id: 3, votes: 12000, seats: 1 },
      { id: 4, votes: 6000, seats: 0 },
      { id: 5, votes: 3100, seats: 0 },
    ]);
  });
});

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
      { id: 0, votes: 47000, seats: 5, distortion: -0.47 + 0.5, percSeats: 0.5, percVotes: 0.47 },
      { id: 1, votes: 16000, seats: 2, distortion: -0.16 + 0.2, percSeats: 0.2, percVotes: 0.16 },
      { id: 2, votes: 15900, seats: 2, distortion: -0.159 + 0.2, percSeats: 0.2, percVotes: 0.159 },
      { id: 3, votes: 12000, seats: 1, distortion: -0.12 + 0.1, percSeats: 0.1, percVotes: 0.12 },
      { id: 4, votes: 6000, seats: 0, distortion: -0.06, percSeats: 0, percVotes: 0.06 },
      { id: 5, votes: 3100, seats: 0, distortion: -0.031, percSeats: 0, percVotes: 0.031 },
    ]);
  });
  it('should allocate using Saint-Lague method', () => {
    const allocatedResult = distributeSeats(result, {
      allocationMethod: seatAllocationMethodTypes.SAINT_LAGUE,
      minThreshold: 3,
    });

    expect(allocatedResult).toEqual([
      { id: 0, votes: 47000, seats: 4, distortion: -0.47 + 0.4, percSeats: 0.4, percVotes: 0.47 },
      { id: 1, votes: 16000, seats: 2, distortion: -0.16 + 0.2, percSeats: 0.2, percVotes: 0.16 },
      { id: 2, votes: 15900, seats: 2, distortion: -0.159 + 0.2, percSeats: 0.2, percVotes: 0.159 },
      { id: 3, votes: 12000, seats: 1, distortion: -0.12 + 0.1, percSeats: 0.1, percVotes: 0.12 },
      { id: 4, votes: 6000, seats: 1, distortion: -0.06 + 0.1, percSeats: 0.1, percVotes: 0.06 },
      { id: 5, votes: 3100, seats: 0, distortion: -0.031, percSeats: 0, percVotes: 0.031 },
    ]);
  });
  it('should allocate using modified Saint-Lague method', () => {
    const allocatedResult = distributeSeats(result, {
      allocationMethod: seatAllocationMethodTypes.SAINT_LAGUE_MOD,
      minThreshold: 3,
    });

    expect(allocatedResult).toEqual([
      { id: 0, votes: 47000, seats: 5, distortion: -0.47 + 0.5, percSeats: 0.5, percVotes: 0.47 },
      { id: 1, votes: 16000, seats: 2, distortion: -0.16 + 0.2, percSeats: 0.2, percVotes: 0.16 },
      { id: 2, votes: 15900, seats: 2, distortion: -0.159 + 0.2, percSeats: 0.2, percVotes: 0.159 },
      { id: 3, votes: 12000, seats: 1, distortion: -0.12 + 0.1, percSeats: 0.1, percVotes: 0.12 },
      { id: 4, votes: 6000, seats: 0, distortion: -0.06, percSeats: 0, percVotes: 0.06 },
      { id: 5, votes: 3100, seats: 0, distortion: -0.031, percSeats: 0, percVotes: 0.031 },
    ]);
  });
});

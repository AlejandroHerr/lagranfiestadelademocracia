import { seatAllocationMethodTypes } from '../../constants/seatAllocation';

import distributeSeats from '../distributeSeats';

import { sortBySeatsAndVotes } from './helpers';

export default (results, { allocationMethod = seatAllocationMethodTypes.D_HONDT, minThreshold = 3 } = {}) => {
  const resultsWithSeats = results.map(result => ({
    ...result,
    resultsByParty: distributeSeats(result, {
      allocationMethod,
      minThreshold,
    }).sort(sortBySeatsAndVotes),
  }));

  return resultsWithSeats;
};

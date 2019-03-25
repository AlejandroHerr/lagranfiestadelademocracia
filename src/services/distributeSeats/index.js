import { seatAllocationMethodTypes } from '../../constants/seatAllocation';
import updateImmutableArray from '../../utils/updateImmutableArray';

import matchFn from '../../utils/matchFn';
import get from '../../utils/get';

import seatAllocator from '../seatAllocator';

import { filterPartiesUnderThreshold } from './helpers';

export default (
  { resultsByParty, electoralData },
  { allocationMethod = seatAllocationMethodTypes.D_HONDT, minThreshold = 3 } = {},
) => {
  const filteredParties = filterPartiesUnderThreshold(resultsByParty, get(electoralData, 'valids'), minThreshold);

  const distribution = seatAllocator(allocationMethod);

  return distribution
    .allocate(filteredParties, electoralData.seats)
    .reduce(
      (results, partyWithSeats) =>
        updateImmutableArray(results, results.findIndex(matchFn(partyWithSeats.id, 'id')), () => partyWithSeats),
      resultsByParty,
    );
};

import { seatAllocationMethodTypes } from '../../constants/seatAllocation';
import updateImmutableArray from '../../utils/updateImmutableArray';

import { addPercVotesAndSeats, filterPartiesOverTreshold, addDistortion } from './helpers';
import seatAllocator from '../seatAllocator';
import matchFn from '../../utils/matchFn';

export default (
  { resultsByParty, electoralData },
  { allocationMethod = seatAllocationMethodTypes.D_HONDT, minThreshold = 3 } = {},
) => {
  const mappedResults = addPercVotesAndSeats(resultsByParty, electoralData);
  const filteredParties = filterPartiesOverTreshold(mappedResults, minThreshold);

  const distribution = seatAllocator(allocationMethod);

  return distribution
    .allocate(filteredParties, electoralData.seats)
    .reduce(
      (results, partyWithSeats) =>
        updateImmutableArray(results, results.findIndex(matchFn(partyWithSeats.id, 'id')), () => partyWithSeats),
      mappedResults,
    )
    .map(resultForParty => addDistortion(resultForParty, electoralData.seats));
};

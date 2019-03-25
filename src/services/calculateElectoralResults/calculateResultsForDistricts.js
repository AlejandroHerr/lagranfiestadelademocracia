import { seatAllocationMethodTypes } from '../../constants/seatAllocation';
import compose from '../../utils/compose';
import get from '../../utils/get';
import updateImmutableObject from '../../utils/updateImmutableObject';

import distributeSeats from '../distributeSeats';

import { mapAfterSeatDistribution, mapBeforeSeatDistribution } from './mappers';

export default (results, { allocationMethod = seatAllocationMethodTypes.D_HONDT, minThreshold = 3 } = {}) =>
  results.map(
    compose(
      mapAfterSeatDistribution,
      source =>
        updateImmutableObject(source, 'resultsByParty', resultsByParty =>
          distributeSeats(
            {
              electoralData: get(source, 'electoralData'),
              resultsByParty,
            },
            {
              allocationMethod,
              minThreshold,
            },
          ),
        ),
      mapBeforeSeatDistribution,
    ),
  );

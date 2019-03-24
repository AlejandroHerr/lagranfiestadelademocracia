import { seatAllocationMethodTypes } from '../../constants/seatAllocation';

import allocateByHighestAverage from './allocateByHighestAverage';
import {
  dHondtQuotientCalculator,
  saintLagueQuotientCalculator,
  saintLagueModQuotientCalculator,
} from './quotientCalculators';

const seatAllocationMethods = {
  [seatAllocationMethodTypes.D_HONDT]: {
    allocate: allocateByHighestAverage(dHondtQuotientCalculator),
  },
  [seatAllocationMethodTypes.SAINT_LAGUE]: {
    allocate: allocateByHighestAverage(saintLagueQuotientCalculator),
  },
  [seatAllocationMethodTypes.SAINT_LAGUE_MOD]: {
    allocate: allocateByHighestAverage(saintLagueModQuotientCalculator),
  },
};

export default (type = '') => seatAllocationMethods[type] || seatAllocationMethods[seatAllocationMethodTypes.D_HONDT];

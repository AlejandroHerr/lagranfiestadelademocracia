import { seatAllocationMethodTypes } from '../../constants/seatAllocation';
import { regionTypes } from '../../constants/regions';
import get from '../../utils/get';
import calculateResultsForParentRegion from './calculateResultsForParentRegion';
import calculateResultsForDistricts from './calculateResultsForDistricts';

export default (results, regions, { allocationMethod = seatAllocationMethodTypes.D_HONDT, minThreshold = 3 } = {}) => {
  const calculatedResults = calculateResultsForDistricts(results, { allocationMethod, minThreshold });

  const electoralDistrictType = get(results, [0, 'regionData', 'type']);

  if (electoralDistrictType === regionTypes.COUNTRY) {
    return {
      [regionTypes.COUNTRY]: calculatedResults,
    };
  }

  if (electoralDistrictType === regionTypes.CCAA) {
    return {
      [regionTypes.COUNTRY]: calculateResultsForParentRegion(calculatedResults, regions),
      [regionTypes.CCAA]: calculatedResults,
    };
  }

  const resultsForCcaa = calculateResultsForParentRegion(calculatedResults, regions);

  return {
    [regionTypes.COUNTRY]: calculateResultsForParentRegion(resultsForCcaa, regions),
    [regionTypes.CCAA]: calculateResultsForParentRegion(calculatedResults, regions),
    [regionTypes.PROVINCE]: calculatedResults,
  };
};

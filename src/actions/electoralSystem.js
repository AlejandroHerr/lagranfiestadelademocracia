import rawDataLoader from '../services/rawDataLoader';

const PREFIX = '@ELECTORAL_SYSTEM';

export const CHANGE_ALLOCATION_METHOD = `${PREFIX}_CHANGE_ALLOCATION_METHOD`;
export const CHANGE_ELECTORAL_DISTRICT_TYPE = `${PREFIX}_CHANGE_ELECTORAL_DISTRICT_TYPE`;
export const CHANGE_MIN_THRESHOLD = `${PREFIX}_CHANGE_MIN_THRESHOLD`;

export const changeAllocationMethod = allocationMethod => ({
  type: CHANGE_ALLOCATION_METHOD,
  payload: {
    allocationMethod,
  },
});

export const changeElectoralDistrictType = regionType => ({
  type: CHANGE_ELECTORAL_DISTRICT_TYPE,
  payload: {
    regionType,
    results: rawDataLoader.getResultsByType(regionType),
  },
});

export const changeMinThreshold = minThreshold => ({
  type: CHANGE_MIN_THRESHOLD,
  payload: {
    minThreshold,
  },
});

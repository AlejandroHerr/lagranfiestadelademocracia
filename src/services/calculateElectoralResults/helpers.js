/* eslint-disable import/prefer-default-export */
import { parentRegion } from '../../constants/regions';
import get from '../../utils/get';

export const getParentRegionType = results => {
  const regionType = get(results, [0, 'regionData', 'type']);

  return parentRegion[regionType];
};

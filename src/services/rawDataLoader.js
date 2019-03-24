import mem from 'mem';

import rawParties from '../data/newParties.json';
import rawRegions from '../data/newRegions.json';
import rawResults from '../data/newResults.json';
import matchFn from '../utils/matchFn';

const getParties = () => rawParties;

const getRegions = () => rawRegions;

const getRegionsByType = type => rawRegions.filter(matchFn(type, 'type'));

const getResults = () => rawResults;

const getResultsByType = type => {
  const regionForType = getRegionsByType(type);
  const regionIdsForType = regionForType.map(({ id }) => id);

  return rawResults
    .filter(({ regionId }) => regionIdsForType.includes(regionId))
    .map(result => {
      const regionData = regionForType.find(({ id }) => id === result.regionId);

      return {
        ...result,
        regionData,
      };
    });
};

export default {
  getParties,
  getRegions,
  getRegionsByType: mem(getRegionsByType),
  getResults,
  getResultsByType: mem(getResultsByType),
};

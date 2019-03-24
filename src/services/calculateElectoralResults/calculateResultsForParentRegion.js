import { regionKey } from '../../constants/regions';
import matchFn from '../../utils/matchFn';
import updateImmutableArray from '../../utils/updateImmutableArray';

import { aggregateResults, sortBySeatsAndVotes, getParentRegionType } from './helpers';

export default (results, regions) => {
  const parentRegionType = getParentRegionType(results);
  const parentRegions = regions.filter(matchFn(parentRegionType, 'type'));

  return results
    .reduce((groups, result) => {
      const { regionData } = result;
      const groupKey = regionKey[parentRegionType];
      const groupValue = regionData[groupKey];
      const groupIndex = groups.findIndex(matchFn(groupValue, 'id'));
      const groupExists = groupIndex !== -1;

      if (!groupExists) {
        const region = parentRegions.find(matchFn(groupValue, 'id'));
        const { electoralData, resultsByParty } = result;

        return groups.concat({
          id: region.id,
          regionId: region.id,
          regionData: region,
          electoralData,
          resultsByParty,
        });
      }

      return updateImmutableArray(groups, groupIndex, group => aggregateResults(group, result));
    }, [])
    .map(({ resultsByParty, ...result }) => ({
      ...result,
      resultsByParty: resultsByParty.sort(sortBySeatsAndVotes),
    }));
};

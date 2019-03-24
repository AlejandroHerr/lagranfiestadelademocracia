import { regionKey } from '../../constants/regions';
import matchFn from '../../utils/matchFn';
import updateImmutableArray from '../../utils/updateImmutableArray';

import { getParentRegionType } from './helpers';
import { mapAfterSeatDistribution } from './mappers';
import get from '../../utils/get';
import aggregateResults from './aggregateResults';

export default (results, regions) => {
  const parentRegionType = getParentRegionType(results);
  const parentRegions = regions.filter(matchFn(parentRegionType, 'type'));
  const groupKey = regionKey[parentRegionType];

  return results
    .reduce((groups, result) => {
      const groupValue = get(result, ['regionData', groupKey]);
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
    .map(mapAfterSeatDistribution);
};

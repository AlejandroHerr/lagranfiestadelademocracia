import createCachedSelector from 're-reselect';

import resultsForViewSelector from './resultsForViewSelector';

const resultsWithPartyDataForViewSelector = createCachedSelector(
  resultsForViewSelector,
  ({ data }) => data.parties,
  (results, parties) => ({
    ...results,
    resultsByParty: results.resultsByParty.map(party => {
      const partyData = parties.find(({ id }) => id === party.id);
      return {
        ...party,
        ...partyData,
      };
    }),
  }),
)(({ electoralSystem, view }) => {
  const { electoralDistrictType, allocationMethod, minThreshold } = electoralSystem;
  const { regionType, regionId } = view;

  return `${electoralDistrictType}-${allocationMethod}-${minThreshold}-${regionType}-${regionId}`;
});

export default resultsWithPartyDataForViewSelector;

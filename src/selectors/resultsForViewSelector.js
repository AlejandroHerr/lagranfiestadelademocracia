import createCachedSelector from 're-reselect';

import resultsForElectoralSystemSelector from './resultsForElectoralSystemSelector';

const resultsForViewSelector = createCachedSelector(
  resultsForElectoralSystemSelector,
  ({ data }) => data.parties,
  ({ view }) => view,
  (results, parties, { regionType, regionId }) => {
    const selectedResults = results[regionType].find(result => result.regionId === regionId);
    return {
      ...selectedResults,
      resultsByParty: selectedResults.resultsByParty
        .filter(({ percVotes }) => percVotes >= 0.1 / 100)
        .map(party => {
          const partyData = parties.find(({ id }) => id === party.id);
          return {
            ...party,
            ...partyData,
          };
        }),
    };
  },
)(({ electoralSystem, view }) => {
  const { electoralDistrictType, allocationMethod, minThreshold } = electoralSystem;
  const { regionType, regionId } = view;

  return `${electoralDistrictType}-${allocationMethod}-${minThreshold}-${regionType}-${regionId}`;
});

export default resultsForViewSelector;

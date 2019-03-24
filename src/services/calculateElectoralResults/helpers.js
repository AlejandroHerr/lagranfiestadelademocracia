import { parentRegion } from '../../constants/regions';
import calculateDistortion from '../../utils/calculateDistortion';
import compose from '../../utils/compose';
import get from '../../utils/get';
import updateImmutableArray from '../../utils/updateImmutableArray';

const sumAbsoluteData = (source, addition) => ({
  valids: source.valids + addition.valids,
  prevWhites: source.prevWhites + addition.prevWhites,
  prevNulls: source.prevNulls + addition.prevNulls,
  prevAbstentions: source.prevAbstentions + addition.prevAbstentions,
  prevVotes: source.prevVotes + addition.prevVotes,
  prevCensus: source.prevCensus + addition.prevCensus,
  whites: source.whites + addition.whites,
  nulls: source.nulls + addition.nulls,
  abstentions: source.abstentions + addition.abstentions,
  votes: source.votes + addition.votes,
  census: source.census + addition.census,
  seats: source.seats + addition.seats,
});

const addRelativeData = data => ({
  ...data,
  percVotes: data.votes / data.census,
  percAbstention: data.abstentions / data.census,
  percValid: data.valids / data.votes,
  percWhite: data.whites / data.votes,
  percNull: data.nulls / data.votes,
});

const sumElectoralData = compose(
  addRelativeData,
  sumAbsoluteData,
);

const sumResultsByParty = (source, addition, data) => {
  return source.concat(addition).reduce((total, party) => {
    const previousPartyIndex = total.findIndex(({ id }) => id === party.id);

    if (previousPartyIndex === -1) {
      const percVotes = party.votes / data.valids;
      const percSeats = party.seats / data.seats;
      const distortion = calculateDistortion(percVotes, percSeats);

      return total.concat({
        ...party,
        percVotes,
        percSeats,
        distortion,
      });
    }

    return updateImmutableArray(total, previousPartyIndex, previousParty => {
      const votes = previousParty.votes + party.votes;
      const percVotes = votes / data.valids;
      const seats = previousParty.seats + party.seats;
      const percSeats = seats / data.seats;
      const distortion = calculateDistortion(percVotes, percSeats);

      return {
        ...previousParty,
        votes,
        percVotes,
        seats,
        percSeats,
        distortion,
      };
    });
  }, []);
};

export const aggregateResults = (source, addition) => {
  const electoralData = sumElectoralData(source.electoralData, addition.electoralData);
  const resultsByParty = sumResultsByParty(source.resultsByParty, addition.resultsByParty, electoralData);

  return {
    ...source,
    electoralData,
    resultsByParty,
  };
};

export const sortBySeatsAndVotes = (partyA, partyB) =>
  partyB.seats === partyA.seats ? partyB.votes - partyA.votes : partyB.seats - partyA.seats;

export const getParentRegionType = results => {
  const regionType = get(results, [0, 'regionData', 'type']);
  return parentRegion[regionType];
};

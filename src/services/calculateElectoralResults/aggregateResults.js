import compose from '../../utils/compose';
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

const sumResultsByParty = (source, addition) => {
  return source.concat(addition).reduce((total, party) => {
    const previousPartyIndex = total.findIndex(({ id }) => id === party.id);

    if (previousPartyIndex === -1) {
      return total.concat({
        ...party,
      });
    }

    return updateImmutableArray(total, previousPartyIndex, previousParty => {
      const votes = previousParty.votes + party.votes;
      const seats = previousParty.seats + party.seats;

      return {
        ...previousParty,
        votes,
        seats,
      };
    });
  }, []);
};
export default (source, addition) => ({
  ...source,
  electoralData: sumElectoralData(source.electoralData, addition.electoralData),
  resultsByParty: sumResultsByParty(source.resultsByParty, addition.resultsByParty),
});

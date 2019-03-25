import updateImmutableObject from '../../utils/updateImmutableObject';
import get from '../../utils/get';
import setImmutableObject from '../../utils/setImmutableObject';
import compose from '../../utils/compose';

const sortBySeatsAndVotes = (partyA, partyB) =>
  partyB.seats === partyA.seats ? partyB.votes - partyA.votes : partyB.seats - partyA.seats;

export const mapBeforeSeatDistribution = compose(source =>
  updateImmutableObject(source, 'resultsByParty', resultsByParty =>
    resultsByParty.map(partyResult => setImmutableObject(partyResult, 'seats', 0)),
  ),
);

export const mapAfterSeatDistribution = compose(
  source =>
    setImmutableObject(
      source,
      ['electoralData', 'distortion'],
      get(source, 'resultsByParty').reduce((sum, partyResult) => sum + Math.abs(partyResult.distortion), 0),
    ),
  source => {
    const electoralData = get(source, 'electoralData');

    return updateImmutableObject(source, 'resultsByParty', resultsByParty =>
      resultsByParty.map((partyResult, index) => {
        const percVotes = partyResult.votes / electoralData.valids;
        const percSeats = partyResult.seats / electoralData.seats;
        const distortion = percSeats - percVotes;
        const costPerSeat = partyResult.seats ? partyResult.votes / partyResult.seats : 0;
        const position = index + 1;

        return {
          ...partyResult,
          percVotes,
          percSeats,
          distortion,
          costPerSeat,
          position,
        };
      }),
    );
  },
  source => updateImmutableObject(source, 'resultsByParty', resultsByParty => resultsByParty.sort(sortBySeatsAndVotes)),
);

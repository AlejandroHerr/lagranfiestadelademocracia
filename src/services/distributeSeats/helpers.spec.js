import { addDistortion, addPercVotesAndSeats } from './helpers';

describe('src/services/distributeSeats', () => {
  describe('helpers', () => {
    describe('addPercVotesAndSeats', () => {
      it('should add percSeats and distortion index', () => {
        expect(addPercVotesAndSeats([{ votes: 5 }], { valids: 100 })).toEqual([
          {
            votes: 5,
            percVotes: 0.05,
            seats: 0,
          },
        ]);
      });
    });
    describe('addDistortion', () => {
      it('should add percSeats and distortion index', () => {
        expect(addDistortion({ seats: 0, percVotes: 1 }, 100)).toEqual({
          seats: 0,
          percVotes: 1,
          percSeats: 0,
          distortion: -1,
        });
        expect(addDistortion({ seats: 1, percVotes: 0.1 }, 10)).toEqual({
          seats: 1,
          percVotes: 0.1,
          percSeats: 0.1,
          distortion: 0,
        });
      });
    });
  });
});
